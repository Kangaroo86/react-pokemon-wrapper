//import getBattleState from '../../api/getBattleState';

export default function listenForMessageUpdateProcess(messageObj) {
  console.log('my messageObj-----------', messageObj);
  return (dispatch, getState, socket) => {
    socket.emit('MESSAGE_CREATE', messageObj);
    socket.on('MESSAGE_RESPONSE', textMessage => {
      console.log('do i get my message response----', textMessage);
      dispatch({ type: 'GET_MESSAGE', getTextMessage: textMessage });
    });
  };
}
