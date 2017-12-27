//import getBattleState from '../../api/getBattleState';

export default function listenForMessageUpdateProcess(messageObj) {
  return (dispatch, getState, socket) => {
    console.log('my socket---------', socket);
    socket.emit('MESSAGE_CREATE', messageObj);
    // missing dispatch
    // dispatch({ type: 'MESSAGE_CREATED', messageObj });//dont need this
  };
}

/*

CLIENT => SERVER   socket.emit  SEND_MESSAGE
    => dispatch MESSAGE_SENT Redux

SERVER => CLIENT  socket.on  RECEIVE_MESSAGE
  => dispatch MESSAGE_RECEIVED


*/
