import usersReducer from '~/reducers/usersReducer';
import groupsReducer from '~/reducers/groupsReducer';
import { Map, fromJS } from 'immutable';

const initialState = fromJS({
  users: {
    user1: {
      group1: 1,
      group2: 1,
    },
    user2: {
      group2: 1,
      group3: 1,
    },
  },
  groups: {
    group1: 1,
    group2: 1,
    group3: 1,
    group4: 1,
  },
});

export default function reducer(state = initialState, action = {}) {
  let nextState = state;
  nextState = usersReducer(nextState, action);
  nextState = groupsReducer(nextState, action);

  return nextState;
}
