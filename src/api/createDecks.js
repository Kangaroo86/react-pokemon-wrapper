import env from '../env';

export default function createUserDeck(deckObj, id) {
  const storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/decks/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    },
    body: JSON.stringify(deckObj)
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(err => console.log('API call createDeck failed: ', err));
}
