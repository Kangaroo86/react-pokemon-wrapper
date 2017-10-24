export default function deleteUserDeck(id, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(result => result.deleted);
}
