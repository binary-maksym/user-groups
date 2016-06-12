'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroup = addGroup;
exports.deleteGroup = deleteGroup;

var _immutable = require('immutable');

function addGroup() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var group = payload.group;

  group = group || '';
  group = group.replace(/[^0-9a-z\s_-]/i, '').substr(0, 30);

  return group ? state.setIn(['groups', group], 1) : state;
}

function deleteGroup() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var group = payload.group;

  var groupUsers = state.get('users', (0, _immutable.Map)()).filter(function (user) {
    return user.has(group);
  });

  return groupUsers.isEmpty() ? state.deleteIn(['groups', group], 1) : state;
}