import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('data', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('data', store.getState().toJS());
    socket.on('action', () => {
      socket.emit('pong');
      store.dispatch.bind(store)
    });
  });
}
