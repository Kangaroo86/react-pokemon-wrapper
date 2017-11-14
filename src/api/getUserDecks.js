import recordToUserDeck from './utils/recordToUserDeck';

export default function getUserDecks({ databaseId, token }) {
  // fetch(`${env.API_BASE_URL}/users/${userId}/decks`)
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      let newresult = data.records.map(recordToUserDeck); //'records' is an object from List records in Airtable
      return newresult;
    });
}
