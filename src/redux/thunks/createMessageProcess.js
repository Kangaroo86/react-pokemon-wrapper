import { socket } from '../../socket.io/socketManager';

export default function createMessageProcess(messageObj) {
  return (dispatch, getState) => {
    socket.emit('CREATE_MESSAGE', messageObj);

    // socket.on('MESSAGE_RESPONSE', messageObj => {
    //   console.log('messageObj--------->', messageObj);
    //   dispatch({
    //     type: 'UPDATE_MESSAGES',
    //     messages: [messageObj]
    //   });
    // });
  };
}
