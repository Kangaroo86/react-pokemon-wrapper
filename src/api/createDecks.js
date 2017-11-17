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
      console.log('API call----', response);
      return response.json();
    })
    .then(response => {
      console.log('API call----', response);
      return response;
    })
    .catch(err => console.log('API CALL::CREATE DECK ERROR:: ', err));
}
