import signIn from '../../api/signIn';

export default function signInProcess(attribute) {
  return (dispatch, getState) => {
    return signIn(attribute)
      .then(result => {
        //console.log('SignInProcess THUNK Failed---:', result);
        if (result.id === undefined) {
          dispatch({
            type: 'USER_SIGNIN',
            userSignIn: result
          });
        } else {
          //console.log('SignInProcess THUNK SUCESSFULL---:', result);
          localStorage.setItem('token', result.token);
          localStorage.setItem('userId', result.id);
          dispatch({
            type: 'USER_SIGNIN',
            userSignIn: result
          });
        }
      })
      .catch(err => err);
  };
}
