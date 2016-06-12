import { expect } from 'chai';
import { fromJS } from 'immutable';

import groupsReducer from '~/reducers/groupsReducer';

describe('reducers::groupsReducer', () => {
  const state = fromJS({
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

  it('addGroup', () =>
    expect(groupsReducer(state, {
      type: 'ADD_GROUP',
      payload: {
        group: 'group5',
      },
    }))
    .to.eql(state.setIn(['groups', 'group5'], 1)));

  it('deleteGroup', () =>
    expect(groupsReducer(state, {
      type: 'DELETE_GROUP',
      payload: {
        group: 'group4',
      },
    }))
    .to.eql(state.deleteIn(['groups', 'group4'])));

  it('wrong action type', () =>
    expect(groupsReducer(state, {
      payload: {
        group: 'user4',
      },
    }))
    .to.eql(state));
});
