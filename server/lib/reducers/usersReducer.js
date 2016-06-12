'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersReducer;

var _usersHelper = require('/root/user-groups/server/lib/helpers/usersHelper');

var _immutable = require('immutable');

function usersReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case 'ADD_USER':
      return (0, _usersHelper.changeUser)(state, Object.assign({}, action.payload, { isNew: 1 }));
    case 'CHANGE_USER':
      return (0, _usersHelper.changeUser)(state, Object.assign({}, action.payload, { isNew: 0 }));
    case 'DELETE_USER':
      return (0, _usersHelper.deleteUser)(state, action.payload);
    default:
      return state;
  }
}