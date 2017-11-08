import env from '../env';

export default function createUserDeck(attribute) {
  const storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/decks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    },
    body: JSON.stringify(attribute)
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(err => console.log('API CALL::CREATE DECK ERROR:: ', err));
}
