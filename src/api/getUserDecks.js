import recordToUserDeck from './utils/recordToUserDeck';
import env from '../env';

export default function getUserDecks() {
  //fetch(`${env.API_BASE_URL}/users/${userId}/decks`);
  // return fetch(`https://api.airtable.com/v0/${databaseId}/decks`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  return fetch(`${env.API_BASE_URL}/decks`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      //let newresult = data.map(recordToUserDeck); //'records' is an object from List records in Airtable
      //console.log('response FROM API', newresult);
      //console.log('response FROM API', data);
      return data;
    });
}
