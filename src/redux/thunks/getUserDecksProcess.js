// import getUserDecks from '../../api/getUserDecks';
// import getPokemonObj from '../../api/getPokemonObj';
// import getDefaultPokemon from '../../api/getDefaultPokemon';
// import envObj from '../../env.js';
//
// export default function getUserDecksProcess() {
//   return (dispatch, getState, env) => {
//     const scope = {};
//
//     return getUserDecks({
//       databaseId: envObj.AIRTABLE_DATABASE_ID,
//       token: envObj.AIRTABLE_TOKEN
//     })
//       .then(userDecks => {
//         function getSingleRoleFromAir(airTableId) {
//           return fetch(
//             `https://api.airtable.com/v0/${envObj.AIRTABLE_DATABASE_ID}/defaultedPokemon/${airTableId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${envObj.AIRTABLE_TOKEN}`
//               }
//             }
//           )
//             .then(data => {
//               return data.json();
//             })
//             .then(result => {
//               return result.pokemonId;
//             });
//         }
//
//         //scope.userDecks = userDecks;
//
//         const promises = [];
//         userDecks.forEach(userDeck => {
//           const ids = userDeck.cards
//             ? userDeck.cards.map(id =>
//                 getSingleRoleFromAir(id).then(pokeId =>
//                   promises.push(getPokemonObj(pokeId))
//                 )
//               )
//             : [];
//
//           // ids.forEach(id => {
//           //   promises.push(getPokemonObj(id));
//           // });
//         });
//         console.log('thus result-----', promises);
//         return Promise.all(promises);
//       })
//       .then(characters => {
//         //console.log(characters, '<<<<<<<');
//
//         scope.userDecks.forEach(userDeck => {
//           userDeck.cards = userDeck.cards.map(id =>
//             characters.find(character => character.id === id)
//           );
//         });
//
//         dispatch({ type: 'FETCHED_USER_DECKS', userDecks: scope.userDecks });
//       })
//       .catch(error => {
//         console.error('getUserDecksProcess: Couldnt fetch userDecks: ', error);
//       });
//   };
// }

import getUserDecks from '../../api/getUserDecks';
import getPokemonObj from '../../api/getPokemonObj';
import envObj from '../../env.js';

export default function getUserDecksProcess() {
  return (dispatch, getState, env) => {
    const scope = {};
    return getUserDecks({
      databaseId: envObj.AIRTABLE_DATABASE_ID,
      token: envObj.AIRTABLE_TOKEN
    })
      .then(userDecks => {
        console.log('getUserDecksProcess thunk:', userDecks);
        scope.userDecks = userDecks;

        const promises = [];
        userDecks.forEach(userDeck => {
          const ids = userDeck.cards
            ? userDeck.cards.split(',').map(id => parseInt(id, 10))
            : [];
          userDeck.cards = ids;
          ids.forEach(id => {
            promises.push(getPokemonObj(id));
          });
        });
        return Promise.all(promises);
      })
      .then(characters => {
        //console.log(characters, '<<<<<<<');

        scope.userDecks.forEach(userDeck => {
          userDeck.cards = userDeck.cards.map(id =>
            characters.find(character => character.id === id)
          );
        });

        console.log(scope.userDecks, '<<<<');
        dispatch({ type: 'FETCHED_USER_DECKS', userDecks: scope.userDecks });
        //dispatch({ type: 'FETCHED_USER_DECKS', userDecks: scope.userDecks });
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch userDecks: ', error);
      });
  };
}
