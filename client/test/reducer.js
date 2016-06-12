import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import reducer from '~/reducer';

describe('reducer', () => {
  it('SUCCESS_DATA', () => {
    expect(reducer(fromJS({
      pending: 1,
      failure: 1,
    }), {
      type: 'SUCCESS_DATA',
      payload: { data: { groups: { group1: 1 } } },
    })).to.eql(fromJS({
      groups: { group1: 1 },
    }));
  });

  it('PENDING_DATA', () => {
    expect(reducer(Map(), { type: 'PENDING_DATA' })).to.eql(fromJS({
      pending: 1,
    }));
  });

  it('FAILURE_DATA', () => {
    expect(reducer(Map(), { type: 'FAILURE_DATA' })).to.eql(fromJS({
      failure: 1,
    }));
  });
});
