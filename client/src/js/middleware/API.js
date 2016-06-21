export const APImiddleware = (socket) => () => (next) => (action) => {
  if (action.isAPI) {
    socket.emit('action', action[API]);
    next({ type: 'PENDING_DATA' });
  } else {
    next(action);
  }
};
