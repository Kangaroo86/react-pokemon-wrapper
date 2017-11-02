import env from '../env';

export default function deleteUserDeck(id) {
  return fetch(`${env.API_BASE_URL}/decks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(result => result.deleted)
    .catch(err => console.log('delete deck api call failed: ', err));
}
