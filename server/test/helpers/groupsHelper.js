import { expect } from 'chai';
import { fromJS } from 'immutable';

import { addGroup, deleteGroup } from '~/helpers/groupsHelper';

describe('helpers::groupsHelper', () => {
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

  it('add group', () => expect(addGroup(state, { group: 'group5' }))
    .to.eql(state.setIn(['groups', 'group5'], 1)));

  it('attemp to delete group with users', () => expect(deleteGroup(state, { group: 'group3' }))
    .to.eql(state));

  it('attemp to delete group with users', () => expect(deleteGroup(state, { group: 'group3' }))
    .to.eql(state));

  it('deletion empty group', () => expect(deleteGroup(state, { group: 'group4' }))
    .to.eql(state.deleteIn(['groups', 'group4'])));
});
