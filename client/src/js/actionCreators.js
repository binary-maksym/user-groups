import API from '~/middleware/API';

const actionCreators = {
  addUser(payload) {
    return {
      [API]: { type: 'ADD_USER', payload },
    };
  },

  changeUser(payload) {
    return {
      [API]: { type: 'CHANGE_USER', payload },
    };
  },

  deleteUser(payload) {
    return {
      [API]: { type: 'DELETE_USER', payload },
    };
  },

  addGroup(payload) {
    return {
      [API]: { type: 'ADD_GROUP', payload },
    };
  },

  deleteGroup(payload) {
    return {
      [API]: { type: 'DELETE_GROUP', payload },
    };
  },

  requestState() {
    return {
      [API]: { type: 'REQUEST_STATE' },
    };
  },
};

export default actionCreators;
