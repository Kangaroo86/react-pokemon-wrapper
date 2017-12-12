import io from 'socket.io-client';
const socketUrl = 'http://localhost:3000';

export default function initSocket() {
  return (dispatch, getState) => {
    const socket = io(socketUrl);
    socket.on('connect', () => {
      console.log('Connected');
    });
    dispatch({ type: 'FETCHED_SOCKET', socket: socket });
  };
}
