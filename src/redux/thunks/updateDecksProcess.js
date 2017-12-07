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
