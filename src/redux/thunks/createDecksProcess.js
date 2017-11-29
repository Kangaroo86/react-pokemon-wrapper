import createDecks from '../../api/createDecks';

export default function createUserDeckProcess(deckObj) {
  return (dispatch, getState, env) => {
    return createDecks(deckObj, deckObj.userId)
      .then(createdUserDeck => {
        return createdUserDeck;
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch createDeck: ', error);
      });
  };
}
