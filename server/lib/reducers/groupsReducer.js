'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsHelper;

var _groupsHelper = require('/root/user-groups/server/lib/helpers/groupsHelper');

var _immutable = require('immutable');

function groupsHelper() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case 'ADD_GROUP':
      return (0, _groupsHelper.addGroup)(state, action.payload);
    case 'DELETE_GROUP':
      return (0, _groupsHelper.deleteGroup)(state, action.payload);
    default:
      return state;
  }
}