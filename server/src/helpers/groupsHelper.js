import { Map } from 'immutable';

export function addGroup(state = Map(), payload = {}) {
  let { group } = payload;
  group = group && group.replace(/[^0-9a-z\s_-]/i, '').substr(0, 30);

  return group ? state.setIn(['groups', group], 1) : state;
}

export function deleteGroup(state = Map(), payload = {}) {
  const { group } = payload;
  const groupUsers = state.get('users', Map()).filter((user) => user.has(group));

  return groupUsers.isEmpty() ? state.deleteIn(['groups', group], 1) : state;
}
