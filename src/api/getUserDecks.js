import recordToUserDeck from './utils/recordToUserDeck';
import env from '../env';

export default function getUserDecks() {
  const storedToken = localStorage.getItem('token');
  const storedUserId = localStorage.getItem('userId');
  console.log('storedToken------', storedUserId);
  console.log('storedUserId------', storedUserId);
  console.log('whatis is localStorage--------', localStorage);
  //return fetch(`${env.API_BASE_URL}/users/${deckId}/decks/`, {
  return fetch(`${env.API_BASE_URL}/decks/${11}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('get user deck------', data);
      return data;
    })
    .catch(err => {
      console.log('API CALL::GETUSERDECKS ERROR::', err);
    });
}
