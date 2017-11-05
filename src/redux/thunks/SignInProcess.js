import signIn from '../../api/signIn';

export default function signInProcess(attribute) {
  return (dispatch, getState) => {
    return signIn(attribute).then(result => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.setItem('token', result.token);
      localStorage.setItem('userId', result.id);
      dispatch({
        type: 'USER_SIGNIN',
        userSignIn: result
      });
      return result;
    });
  };
}
