import { changeUser, deleteUser } from '~/helpers/usersHelper';
import { Map } from 'immutable';
import objectAssign from 'object-assign';

export default function usersReducer(state = Map(), action = {}) {
  switch (action.type) {
    case 'ADD_USER':
      return changeUser(state, objectAssign({}, action.payload, { isNew: 1 }));
    case 'CHANGE_USER':
      return changeUser(state, objectAssign({}, action.payload, { isNew: 0 }));
    case 'DELETE_USER':
      return deleteUser(state, action.payload);
    default:
      return state;
  }
}
