import env from '../env';

export default function createUserDeck(attribute) {
  const value = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/decks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${value}`
    },
    body: JSON.stringify(attribute)
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      //console.log('created deck=========++', response);
      return response;
    })
    .catch(err => console.log('API CALL::CREATE DECK ERROR:: ', err));
}

// export default function createUserDeck(
//   deckName,
//   pokemonIds,
//   { databaseId, token }
// ) {
//   return fetch(`https://api.airtable.com/v0/${databaseId}/decks/`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       fields: {
//         name: deckName,
//         wins: 0,
//         losses: 0,
//         cards: pokemonIds.join(',')
//       }
//     })
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(response => {
//       return response;
//     });
// }
