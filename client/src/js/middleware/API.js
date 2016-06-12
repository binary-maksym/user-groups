const API = Symbol('API');
export default API;

export const APImiddleware = (socket) => () => (next) => (action) => {
  const isAPI = typeof action[API] === 'object';

  if (isAPI) {
    socket.emit('action', action[API]);
    next({ type: 'PENDING_DATA' });
  } else {
    next(action);
  }
};
