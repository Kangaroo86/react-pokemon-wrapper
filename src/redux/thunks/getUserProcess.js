import getUser from '../../api/getUser.js';

export default function getUserProcess(attribute) {
  return (dispatch, getState) => {
    return getUser(attribute).then(result => {
      dispatch({
        type: 'USER_LOGIN',
        userLogin: result
      });
      return result;
    });
  };
}
