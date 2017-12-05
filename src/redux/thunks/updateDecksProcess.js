import updateDecks from '../../api/updateDecks';

export default function updateUserDeckProcess(deckObj, userId, deckId) {
  return (dispatch, getState, env) => {
    return updateDecks(deckObj, userId, deckId)
      .then(results => {
        console.log('my result update Process------', results);
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
