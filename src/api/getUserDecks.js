import recordToUserDeck from './utils/recordToUserDeck';
import env from '../env';

export default function getUserDecks() {
  return fetch(`${env.API_BASE_URL}/decks`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log('get user deck------', data);
      return data;
    });
}
