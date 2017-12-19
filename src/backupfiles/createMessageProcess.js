import createMessage from '../../api/createMessage';

export default function createMessageProcess(userId, battleId, text) {
  return (dispatch, getState, socket) => {
    return createMessage(userId, battleId, text)
      .then(textMessage => {
        dispatch({ type: 'CREATE_MESSAGE', battleMessage: textMessage });
      })
      .catch(error => {
        console.error(
          'createMessageProcess: Couldnt fetch createMessage: ',
          error
        );
      });
  };
}
