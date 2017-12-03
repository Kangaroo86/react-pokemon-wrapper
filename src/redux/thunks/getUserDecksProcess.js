import getUserDecks from '../../api/getUserDecks';
import getPokemonObj from '../../api/getPokemonObj';

export default function getUserDecksProcess() {
  return (dispatch, getState, env) => {
    const storedUserId = localStorage.getItem('userId');
    //console.log('storedUserId**********', storedUserId);
    if (!storedUserId) {
      dispatch({ type: 'FETCHED_USER_DECKS', userDecks: [] });
      return;
    }

    const scope = {};
    return getUserDecks()
      .then(userDecks => {
        scope.userDecks = userDecks;
        const promises = [];

        let newUserDeck = userDecks.map(userDeck => {
          userDeck.cards = userDeck.cards.map(card => card.pokemonId);
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
        scope.userDecks.forEach(userDeck => {
          userDeck.cards = userDeck.cards.map(id =>
            characters.find(character => character.id === id)
          );
        });
        dispatch({ type: 'FETCHED_USER_DECKS', userDecks: scope.userDecks });
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch userDecks: ', error);
      });
  };
}
