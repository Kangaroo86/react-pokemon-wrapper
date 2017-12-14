export default function socketProcess(message) {
  return (dispatch, getState, socket) => {
    console.log('socket from scoketProcess---', socket);
    dispatch({ type: 'FETCHED_SOCKET', socket: socket });
  };
}
