import getMessage from '../../api/getMessage';

export default function getMessageProcess() {
  return (dispatch, getState, socket) => {
    return getMessage().then(textMessage => {
      dispatch({
        type: 'GET_MESSAGE',
        getMessage: textMessage
      });
    });
  };
}
