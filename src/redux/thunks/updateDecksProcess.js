import updateDecks from '../../api/updateDecks';

export default function updateUserDeckProcess(deckObj, deckId, userId) {
  return (dispatch, getState, env) => {
    return updateDecks(deckObj, deckId, userId)
      .then(results => {
        dispatch({ type: 'UPDATE_DECK', userDecks: results });
      })
      .catch(error => {
        console.log('updateDecksProcess could not fetch: ', error);
      });
  };
}

// import updateDecks from '../../api/updateDecks';
// import envObj from '../../env';
//
// export default function updateUserDeckProcess(deckId) {
//   return (dispatch, getState, env) => {
//     return updateDecks(deckId, {
//       databaseId: envObj.AIRTABLE_DATABASE_ID,
//       token: envObj.AIRTABLE_TOKEN
//     }).then(results => {
//       dispatch({ type: 'UPDATE_DECK', userDecks: results });
//       return results;
//     });
//   };
// }
