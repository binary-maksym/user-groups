import { Map } from 'immutable';

export function addGroup(state = Map(), payload = {}) {
  const { group } = payload;
  return state.setIn(['groups', group], 1);
}

export function deleteGroup(state = Map(), payload = {}) {
  const { group } = payload;
  const groupUsers = state.get('users', Map()).filter((user) => user.has(group));

  return groupUsers.isEmpty() ? state.deleteIn(['groups', group], 1) : state;
}
