import { expect } from 'chai';
import { fromJS } from 'immutable';

import makeStore from '~/store/makeStore';

describe('store::makeStore', () => {
  it('is a Redux store configured with the correct reducer', () => {
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

    const store = makeStore();
    expect(store.getState()).to.equal(initialState);

    store.dispatch({
      type: 'ADD_GROUP',
      payload: {
        group: 'group1',
      },
    });

    expect(store.getState()).to.equal(initialState.setIn(['groups', 'group1'], 1));
  });
});
