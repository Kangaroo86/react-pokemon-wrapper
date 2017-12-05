import env from '../env';

export default function createUserDeck(deckObj, userId) {
  const storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/users/${userId}/decks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    },
    body: JSON.stringify(deckObj)
    /*
    {
      name: 'some name',
      cards: '3,4,5'   // [3,4,5].join(',')
    }
    */
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(err => console.log('API call createDeck failed: ', err));
}
