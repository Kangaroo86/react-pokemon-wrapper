export default function updateMessagesProcess(messageObj) {
  return (dispatch, getState, socket) => {
    dispatch({
      type: 'GET_ALL_MESSAGES',
      messages: [messageObj]
    });
  };
}
