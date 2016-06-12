'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _usersReducer = require('/root/user-groups/server/lib/reducers/usersReducer');

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _groupsReducer = require('/root/user-groups/server/lib/reducers/groupsReducer');

var _groupsReducer2 = _interopRequireDefault(_groupsReducer);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = (0, _immutable.fromJS)({
  users: {
    user1: {
      group1: 1,
      group2: 1
    },
    user2: {
      group2: 1,
      group3: 1
    }
  },
  groups: {
    group1: 1,
    group2: 1,
    group3: 1,
    group4: 1
  }
});

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var nextState = state;
  nextState = (0, _usersReducer2.default)(nextState, action);
  nextState = (0, _groupsReducer2.default)(nextState, action);

  return nextState;
}