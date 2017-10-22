import recordToPokemon from './utils/recordToPokemon';

export default function getDefaultPokemon({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/defaultedPokemon`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log('defaultpokemon FROM API: ', data);
      return data.records.map(recordToPokemon);
    });
}
