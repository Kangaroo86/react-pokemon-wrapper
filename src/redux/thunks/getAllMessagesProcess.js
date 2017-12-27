import getAllMessages from '../../api/getAllMessages';

export default function getAllMessagesProcess() {
  return (dispatch, getState, socket) => {
    return getAllMessages().then(messagesObj => {
      dispatch({
        type: 'GET_ALL_MESSAGES',
        messages: messagesObj
      });
    });
  };
}
