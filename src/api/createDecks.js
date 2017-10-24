export default function createUserDeck(
  deckName,
  pokemonIds,
  { databaseId, token }
) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        name: deckName,
        wins: 0,
        losses: 0,
        cards: pokemonIds.join(',')
      }
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}
