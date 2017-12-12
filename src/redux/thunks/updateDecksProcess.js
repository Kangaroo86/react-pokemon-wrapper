import updateDecks from '../../api/updateDecks';
import getPokemonObj from '../../api/getPokemonObj';

export default function updateUserDeckProcess(deckObj, deckId, userId) {
  return (dispatch, getState, env) => {
    let scope = {};

    return updateDecks(deckObj, deckId, userId)
      .then(decks => {
        scope.userDecks = decks;
        const promises = [];

        let newUserDeck = decks.map(userDecks => {
          userDecks.cards = userDecks.cards.split(',').map(ids => {
            return Number(ids);
          });
          return userDecks;
        });

        newUserDeck.forEach(userDeck => {
          const ids = userDeck.cards;
          userDeck.cards = ids;
          ids.forEach(id => {
            promises.push(getPokemonObj(id));
          });
        });

        return Promise.all(promises);
      })
      .then(characters => {
        scope.userDecks.forEach(decks => {
          decks.cards = decks.cards.map(id =>
            characters.find(character => character.id === id)
          );
        });
        dispatch({ type: 'UPDATE_DECK', userDecks: scope.userDecks });
      })
      .catch(error => {
        console.log('updateDecksProcess could not fetch: ', error);
      });
  };
}
