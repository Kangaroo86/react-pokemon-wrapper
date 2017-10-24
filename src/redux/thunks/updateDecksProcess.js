import updateDecks from '../../api/updateDecks';
import envObj from '../../env';

export default function updateUserDeckProcess(id, deckName, pokemonIds) {
  return (dispatch, getState, env) => {
    return updateDecks(id, deckName, pokemonIds, {
      databaseId: envObj.AIRTABLE_DATABASE_ID,
      token: envObj.AIRTABLE_TOKEN
    }).then(results => {
      dispatch({ type: 'UPDATE_DECK', userDecks: results });
      return results;
    });
  };
}
