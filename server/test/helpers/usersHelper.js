import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import { changeUser, deleteUser } from '~/helpers/usersHelper';

describe('helpers::usersHelper', () => {
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

  describe('changeUser', () => {
    it('attempt adding existing user', () => {
      expect(changeUser(state, { user: 'user1', groups: ['group1'], isNew: 1 })).to.eql(state);
    });

    it('attempt changing not existing user', () => {
      expect(changeUser(state, { user: 'user3', groups: ['group1'], isNew: 0 })).to.eql(state);
    });

    it('attempt setting non existing group', () => {
      expect(changeUser(state, { user: 'user1', groups: ['group5'], isNew: 0 })).to.eql(state);
    });

    it('valid user adding', () => {
      expect(changeUser(state, { user: 'user3', groups: ['group1'], isNew: 1 }))
        .to.eql(state.setIn(['users', 'user3'], fromJS({ group1: 1 })));
    });
  });

  describe('deleteUser', () => {
    it('attempt to delete non existing user', () => {
      expect(deleteUser(state, { user: 'user3' })).to.eql(state);
    });

    it('valid delete', () => {
      expect(deleteUser(state, { user: 'user1' })).to.eql(state.deleteIn(['users', 'user1']));
    });
  });
});
