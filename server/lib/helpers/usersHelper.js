'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeUser = changeUser;
exports.deleteUser = deleteUser;

var _immutable = require('immutable');

function changeUser() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var user = payload.user;
  var groups = payload.groups;
  var isNew = payload.isNew;

  var userExists = state.getIn(['users', user]);
  var areValidGroups = validateGroups(state, groups);

  var nextState = state;
  user = user || '';
  user = user.replace(/[^0-9a-z\s_-]/i, '').substr(0, 30);

  if ((isNew ? !userExists : userExists) && areValidGroups) {
    var groupsObj = groups.reduce(function (groupsObj, group) {
      var nextGroupsObj = groupsObj;
      nextGroupsObj[group] = 1;
      return nextGroupsObj;
    }, {});

    nextState = nextState.setIn(['users', user], (0, _immutable.fromJS)(groupsObj));
  }

  return nextState;
}

function deleteUser() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var user = payload.user;

  return state.deleteIn(['users', user]);
}

function validateGroups() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var groups = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var isValid = false;
  if (typeof groups.filter === 'function') {
    var filteredGroups = groups.filter(function (group) {
      return state.hasIn(['groups', group]);
    });
    isValid = groups.length && groups.length === filteredGroups.length;
  }

  return isValid;
}