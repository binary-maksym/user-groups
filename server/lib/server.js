'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startServer;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startServer(store) {
  var io = new _socket2.default().attach(8090);

  store.subscribe(function () {
    return io.emit('data', store.getState().toJS());
  });

  io.on('connection', function (socket) {
    socket.emit('data', store.getState().toJS());
    socket.on('action', function (data) {
      socket.emit('pong');
      store.dispatch.bind(store)(data);
    });
  });
}