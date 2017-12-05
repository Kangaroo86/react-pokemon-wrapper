import env from '../env';

export default function deleteUserDeck(deckId) {
  const storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/decks/${deckId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result.deleted;
    })
    .catch(err => console.log('API call deleteDeck failed:', err));
}
// import env from '../env';
//
// export default function deleteUserDeck(id) {
//   const storedToken = localStorage.getItem('token');
//   return fetch(`${env.API_BASE_URL}/users/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${storedToken}`
//     }
//   })
//     .then(response => response.json())
//     .then(result => result.deleted)
//     .catch(err => console.log('API call deleteDeck failed:', err));
// }
