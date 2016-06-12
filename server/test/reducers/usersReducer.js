import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import usersReducer from '~/reducers/usersReducer';

describe('reducers::usersReducer', () => {
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
    },
  });

  it('addUser', () =>
    expect(usersReducer(state, {
      type: 'ADD_USER',
      payload: {
        user: 'user3',
        groups: ['group1', 'group3'],
      },
    }))
    .to.eql(state.setIn(['users', 'user3'], Map({
      group1: 1,
      group3: 1,
    }))));

  it('changeUser', () =>
    expect(usersReducer(state, {
      type: 'CHANGE_USER',
      payload: {
        user: 'user2',
        groups: ['group1'],
      },
    }))
    .to.eql(state.setIn(['users', 'user2'], Map({
      group1: 1,
    }))));

  it('deleteUser', () =>
    expect(usersReducer(state, {
      type: 'DELETE_USER',
      payload: {
        user: 'user2',
      },
    }))
    .to.eql(state.deleteIn(['users', 'user2'])));

  it('wrong action type', () =>
    expect(usersReducer(state, {
      payload: {
        user: 'user2',
      },
    }))
    .to.eql(state));
});
