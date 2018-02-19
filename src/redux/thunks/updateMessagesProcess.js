import { socket } from '../../socket.io/socketManager';

export default function updateMessagesProcess() {
  return (dispatch, getState) => {
    socket.on('MESSAGE_RESPONSE', messageObj => {
      console.log('messageObj--------', messageObj);
      dispatch({
        type: 'UPDATE_MESSAGES',
        //messages: [messageObj]
        messages: messageObj
      });
    });
  };
}
