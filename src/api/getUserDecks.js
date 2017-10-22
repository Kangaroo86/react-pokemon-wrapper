import recordToUserDeck from './utils/recordToUserDeck';

export default function getUserDecks({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      //console.log('response FROM API', response);
      return response.json();
    })
    .then(data => {
      // console.log('called from API:---- ', data);
      return data.records.map(recordToUserDeck); //'records' is an object from List records in Airtable
    });
}
