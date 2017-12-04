import getUserDecks from '../../api/getUserDecks';
import getPokemonObj from '../../api/getPokemonObj';

export default function getUserDecksProcess() {
  return (dispatch, getState, env) => {
    //const userId = localStorage.getItem('userId');
    // if (!userId) {
    //   dispatch({ type: 'FETCHED_USER_DECKS', userDecks: [] });
    //   return;
    // }

    const scope = {};
    return getUserDecks()
      .then(userDecks => {
        scope.userDecks = userDecks;
        const promises = [];

        let newUserDeck = userDecks.map(userDeck => {
          userDeck.cards = userDeck.cards.map(card => {
            return card.pokemonId;
          });
          return userDeck;
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
        console.log('characters------', characters);
        scope.userDecks.forEach(userDeck => {
          userDeck.cards = userDeck.cards.map(id =>
            characters.find(character => character.id === id)
          );
        });
        console.log('getuserDeck scope------', scope);
        dispatch({ type: 'FETCHED_USER_DECKS', userDecks: scope.userDecks });
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch userDecks: ', error);
      });
  };
}
