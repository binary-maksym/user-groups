import makeStore from '~/store/makeStore';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '~/components/AppContainer';
import '~/../style.scss';

const store = makeStore();

// setTimeout(() => {
ReactDOM.render(<AppContainer store={store} />, document.getElementById('app'));
// }, 1000);
