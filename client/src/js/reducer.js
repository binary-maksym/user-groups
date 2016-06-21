import { fromJS } from 'immutable';

const initialState = fromJS({
  users: {},
  groups: {},
  connection_state: 0,
});


export default function reducer(state = initialState, action = {}) {
  const payload = action.payload;

  switch (action.type) {
    case 'SUCCESS_DATA':
      const data = payload.data;
      return data ? state.merge(fromJS(data)).delete('pending').delete('failure') : state;

    case 'PENDING_DATA':
      return state.set('pending', 1);

    case 'FAILURE_DATA':
      return state.set('failure', 1).delete('pending');

    case 'SET_CONNECTION_STATE':
      const connState = payload.state;
      return typeof connState === 'number' ? state.set('connection_state', connState) : state;

    case 'FIlTER_USERS':
      return state.set('usersFilter', payload.user);
    case 'FIlTER_GROUPS':
      return state.set('groupFilter', payload.group);
    case 'SWITCH_MODAL':
      return state.update('userModalShow', (userModal) => !userModal);
    default:
      return state;
  }
}
