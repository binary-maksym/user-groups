import { Map } from 'immutable';

function addGroup(state, payload) {
  let { group } = payload;
  group = group && group.replace(/[^0-9a-z\s_-]/gi, '').substr(0, 30);

  return group ? state.setIn(['groups', group], 1) : state;
}

function deleteGroup(state, payload) {
  const { group } = payload;
  const groupUsers = state.get('users', Map()).filter((user) => user.has(group));

  return groupUsers.isEmpty() ? state.deleteIn(['groups', group], 1) : state;
}

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
