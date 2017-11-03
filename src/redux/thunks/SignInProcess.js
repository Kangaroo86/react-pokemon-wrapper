import signIn from '../../api/signIn.js';

export default function signInProcess(attribute) {
  return (dispatch, getState) => {
    return signIn(attribute).then(result => {
      dispatch({
        type: 'USER_SIGNIN',
        userSignIn: result
      });
      return result;
    });
  };
}
