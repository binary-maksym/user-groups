import { addGroup, deleteGroup } from '~/helpers/groupsHelper';
import { Map } from 'immutable';

export default function groupsHelper(state = Map(), action = {}) {
  switch (action.type) {
    case 'ADD_GROUP':
      return addGroup(state, action.payload);
    case 'DELETE_GROUP':
      return deleteGroup(state, action.payload);
    default:
      return state;
  }
}
