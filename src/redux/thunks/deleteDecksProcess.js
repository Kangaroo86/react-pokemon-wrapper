import deleteDecks from '../../api/deleteDecks';

export default function deleteUserDeckProcess(deckId) {
  return (dispatch, getState, env) => {
    return deleteDecks(deckId).then(result => {
      console.log('my result from thunk----', result);
      dispatch({ type: 'DELETE_USER_DECK', deckId });
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
