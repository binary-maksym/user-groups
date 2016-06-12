import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import reducer from '~/reducers/reducer';

describe('reducers::reducer', () => {
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

  it('run user action', () =>
    expect(reducer(state, {
      type: 'ADD_USER',
      payload: {
        user: 'user3',
        groups: ['group1', 'group3'],
      },
    }))
    .to.eql(state.setIn(['users', 'user3'], Map({
      group1: 1,
      group3: 1,
    })))
  );

  it('run groups action', () =>
    expect(reducer(state, {
      type: 'ADD_GROUP',
      payload: {
        group: 'group5',
      },
    }))
    .to.eql(state.setIn(['groups', 'group5'], 1)));
});
