export default function updateMessagesProcess(messageObj) {
  return (dispatch, getState, socket) => {
    console.log('from thunk messages received-----------------', messageObj);
    dispatch({
      type: 'UPDATE_MESSAGES',
      messages: [messageObj]
    });
  };
}
