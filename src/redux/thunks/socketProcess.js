export default function socketProcess(message) {
  return (dispatch, getState, socket) => {
    dispatch({ type: 'FETCHED_SOCKET', socket: socket });
  };
}
