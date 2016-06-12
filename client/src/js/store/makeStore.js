import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Map } from 'immutable';
import io from 'socket.io-client';

import reducer from '~/reducer';
import { APImiddleware } from '~/middleware/API';

export default function makeStore(initialState = Map()) {
  const socket = io(`${location.protocol}//${location.hostname}:8090`);
  const finalCreateStore = applyMiddleware(
    APImiddleware(socket),
    createLogger({
      stateTransformer(state) {
        return state && state.toJS();
      },
    })
    )(createStore);

  const store = finalCreateStore(reducer, initialState);

  socket.on('data', (data) => store.dispatch({ type: 'SUCCESS_DATA', payload: { data } }));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
