export default function updateMessagesProcess(messageObj) {
  return (dispatch, getState, socket) => {
    dispatch({
      type: 'UPDATE_MESSAGES',
      messages: [messageObj]
    });
  };
}
