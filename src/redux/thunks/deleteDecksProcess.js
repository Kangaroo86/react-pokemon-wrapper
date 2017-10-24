import deleteDecks from '../../api/deleteDecks';
import envObj from '../../env';

export default function deleteUserDeckProcess(id) {
  return (dispatch, getState, env) => {
    return deleteDecks(id, {
      databaseId: envObj.AIRTABLE_DATABASE_ID,
      token: envObj.AIRTABLE_TOKEN
    }).then(result => {
      dispatch({ type: 'DELETE_USER_DECK', id });
      return result;
    });
  };
}
