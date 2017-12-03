import signIn from '../../api/signIn';

export default function signInProcess(attribute) {
  return (dispatch, getState) => {
    return signIn(attribute)
      .then(result => {
        console.log('my result thunk--------', result);
        console.log(
          'my result thunk--------',
          typeof result.error,
          result.error
        );
        if (result.error === 400) {
          console.log('do i get in here************', result.error === 400);
          dispatch({
            type: 'ERROR_HANDLING_MESSAGE',
            errorMessage: 'Invalid SignIn Request'
          });
        } else {
          localStorage.setItem('token', result.token);
          localStorage.setItem('userId', result.id);
          dispatch({
            type: 'USER_SIGNIN',
            userSignIn: result,
            errorMessage: null
          });
        }
      })
      .catch(err => err);
  };
}
