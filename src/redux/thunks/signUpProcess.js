import signUp from '../../api/signUp';

export default function getUserProcess(attribute) {
  return (dispatch, getState) => {
    return signUp(attribute)
      .then(result => {
        dispatch({
          type: 'USER_SIGNUP',
          userSignup: result
        });
      })
      .catch(err => err);
  };
}
