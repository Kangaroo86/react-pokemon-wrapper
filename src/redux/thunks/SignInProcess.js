import signIn from '../../api/signIn';

export default function signInProcess(attribute) {
  return (dispatch, getState, socket) => {
    return signIn(attribute)
      .then(result => {
        if (result.error === 400) {
          dispatch({
            type: 'ERROR_HANDLING_MESSAGE',
            errorMessage: 'Invalid Password'
          });
        } else {
          localStorage.setItem('token', result.token);
          localStorage.setItem('userId', result.id);
          localStorage.setItem('userIdSocket', null);
          dispatch({
            type: 'USER_SIGNIN',
            userSignIn: result
          });
        }
      })
      .catch(err => err);
  };
}
