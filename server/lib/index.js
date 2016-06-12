'use strict';

var _makeStore = require('/root/user-groups/server/lib/store/makeStore');

var _makeStore2 = _interopRequireDefault(_makeStore);

var _server = require('/root/user-groups/server/lib/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _makeStore2.default)();
(0, _server2.default)(store);