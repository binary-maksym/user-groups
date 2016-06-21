const actionCreators = {
  addUser(payload) {
    return {
      type: 'ADD_USER',
      payload,
      isAPI: true,

    };
  },

  changeUser(payload) {
    return {
      type: 'CHANGE_USER',
      payload,
      isAPI: true,
    };
  },

  deleteUser(payload) {
    return {
      type: 'DELETE_USER',
      payload,
      isAPI: true,
    };
  },

  addGroup(payload) {
    return {
      type: 'ADD_GROUP',
      payload,
      isAPI: true,
    };
  },

  deleteGroup(payload) {
    return {
      type: 'DELETE_GROUP',
      payload,
      isAPI: true,
    };
  },

  requestState() {
    return {
      type: 'REQUEST_STATE',
      isAPI: true,
    };
  },

  filterUsers(payload) {
    return {
      type: 'FIlTER_USERS',
      payload,
    };
  },

  filterGroups(payload) {
    return {
      type: 'FIlTER_GROUPS',
      payload,
    };
  },

  switchModal() {
    return { type: 'SWITCH_MODAL' };
  },
};

export default actionCreators;
