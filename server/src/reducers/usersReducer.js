import { fromJS, Map } from 'immutable';
import objectAssign from 'object-assign';

function changeUser(state, payload) {
  let { user } = payload;
  const { groups, isNew } = payload;

  const filteredGroups = groups.filter((group) => state.hasIn(['groups', group]));
  const areValidGroups = groups.length && groups.length === filteredGroups.length;

  user = user && user.replace(/[^0-9a-z\s_-]/gi, '').substr(0, 30);

  if (!user || !areValidGroups) {
    return state;
  }

  const userExists = state.hasIn(['users', user]);
  if (isNew ? userExists : !userExists) {
    return state;
  }

  const groupsObj = groups.reduce((groupsObj, group) => objectAssign({}, groupsObj, {
    [group]: 1,
  }), {});
  return state.setIn(['users', user], fromJS(groupsObj));
}

function deleteUser(state, payload) {
  const { user } = payload;
  return state.deleteIn(['users', user]);
}


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
