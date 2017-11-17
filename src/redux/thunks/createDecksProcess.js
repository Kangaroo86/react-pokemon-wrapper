import createDecks from '../../api/createDecks';

export default function createUserDeckProcess(deckObj) {
  console.log('deckName-----', deckObj);
  //console.log('id-----', id);
  //console.log('pokemonIdd-----', pokemonIds);
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

// import createDecks from '../../api/createDecks';
// import envObj from '../../env';
//
// export default function createUserDeckProcess(deckName, pokemonIds) {
//   return (dispatch, getState, env) => {
//     return createDecks(deckName, pokemonIds, {
//       databaseId: envObj.AIRTABLE_DATABASE_ID,
//       token: envObj.AIRTABLE_TOKEN
//     })
//       .then(createdUserDeck => {
//         return createdUserDeck;
//       })
//       .catch(error => {
//         console.error('getUserDecksProcess: Couldnt fetch createDeck: ', error);
//       });
//   };
// }
