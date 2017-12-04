import deleteDecks from '../../api/deleteDecks';
import envObj from '../../env';

export default function deleteUserDeckProcess(userId, deckId) {
  return (dispatch, getState, env) => {
    return deleteDecks(userId, deckId, {
      databaseId: envObj.AIRTABLE_DATABASE_ID,
      token: envObj.AIRTABLE_TOKEN
    }).then(result => {
      dispatch({ type: 'DELETE_USER_DECK', userId, deckId });
      return result;
    });
  };
}

// import deleteDecks from '../../api/deleteDecks';
// import envObj from '../../env';
//
// export default function deleteUserDeckProcess(id) {
//   return (dispatch, getState, env) => {
//     return deleteDecks(id, {
//       databaseId: envObj.AIRTABLE_DATABASE_ID,
//       token: envObj.AIRTABLE_TOKEN
//     }).then(result => {
//       dispatch({ type: 'DELETE_USER_DECK', id });
//       return result;
//     });
//   };
// }
