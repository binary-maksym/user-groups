import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import makeStore from '~/store/makeStore';

describe('store::makeStore', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'ADD_GROUP',
      payload: {
        group: 'group1',
      },
    });

    expect(store.getState()).to.equal(fromJS({
      groups: {
        group1: 1,
      },
    }));
  });
});
