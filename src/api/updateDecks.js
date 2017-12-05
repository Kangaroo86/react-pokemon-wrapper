//import recordToUserDeck from './utils/recordToUserDeck';
import env from '../env';

export default function updateUserDeck(deckObj, userId, deckId) {
  const storedToken = localStorage.getItem('token');
  return (
    fetch(`${env.API_BASE_URL}/users/${userId}/decks/${deckId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${storedToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deckObj)
    })
      .then(response => {
        console.log('API------', response);
        return response.json();
      })
      // .then(record => recordToUserDeck(record)) //take this out?
      .catch(err => console.log('API call getUsers failed: ', err))
  );
}
