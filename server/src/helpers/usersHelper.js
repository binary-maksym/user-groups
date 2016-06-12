import { fromJS, Map } from 'immutable';

export function changeUser(state = Map(), payload = {}) {
  const { user, groups, isNew } = payload;
  const userExists = state.getIn(['users', user]);
  const areValidGroups = validateGroups(state, groups);

  let nextState = state;
  if ((isNew ? !userExists : userExists) && areValidGroups) {
    const groupsObj = groups.reduce((groupsObj, group) => {
      const nextGroupsObj = groupsObj;
      nextGroupsObj[group] = 1;
      return nextGroupsObj;
    }, {});

    nextState = nextState.setIn(['users', user], fromJS(groupsObj));
  }

  return nextState;
}

export function deleteUser(state = Map(), payload = {}) {
  const { user } = payload;
  return state.deleteIn(['users', user]);
}

function validateGroups(state = Map(), groups = []) {
  let isValid = false;
  if (typeof groups.filter === 'function') {
    const filteredGroups = groups.filter((group) => state.hasIn(['groups', group]));
    isValid = groups.length && groups.length === filteredGroups.length;
  }

  return isValid;
}