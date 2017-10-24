import recordToUserDeck from './utils/recordToUserDeck';

export default function updateUserDeck(
  id,
  deckName,
  pokemonIds,
  { databaseId, token }
) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        name: deckName,
        cards: pokemonIds.join(',')
      }
    })
  })
    .then(response => response.json())
    .then(record => recordToUserDeck(record));
}
