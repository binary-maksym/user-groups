import { changeUser, deleteUser } from '~/helpers/usersHelper';
import { Map } from 'immutable';

export default function usersReducer(state = Map(), action = {}) {
  switch (action.type) {
    case 'ADD_USER':
      return changeUser(state, Object.assign({}, action.payload, { isNew: 1 }));
    case 'CHANGE_USER':
      return changeUser(state, Object.assign({}, action.payload, { isNew: 0 }));
    case 'DELETE_USER':
      return deleteUser(state, action.payload);
    default:
      return state;
  }
}
