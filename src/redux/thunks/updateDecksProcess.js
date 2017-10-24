import updateDecks from '../../api/updateDecks';

export default function updateUserDeckProcess(id, deckName, pokemonIds) {
  return (dispatch, getState, env) => {
    return updateDecks(id, deckName, pokemonIds, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(results => {
      dispatch({ type: 'UPDATE_DECK', userDecks: results });
      return results;
    });
  };
}
