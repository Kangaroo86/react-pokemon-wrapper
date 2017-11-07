import signIn from '../../api/signIn';

export default function signInProcess(attribute) {
  return (dispatch, getState) => {
    return signIn(attribute).then(result => {
      console.log('thunk result----', result);
      localStorage.setItem('token', result.token);
      dispatch({
        type: 'USER_SIGNIN',
        userSignIn: result
      });
      return result;
    });
  };
}
