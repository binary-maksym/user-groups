import { Map, fromJS } from 'immutable';

export default function reducer(state = Map(), action = {}) {
  const payload = action.payload;

  switch (action.type) {
    case 'SUCCESS_DATA':
      const data = payload.data;
      return data ? state.merge(fromJS(data)).delete('pending').delete('failure') : state;

    case 'PENDING_DATA':
      return state.set('pending', 1);

    case 'FAILURE_DATA':
      return state.set('failure', 1).delete('pending');

    default:
      return state;
  }
}
