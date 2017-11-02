export default function recordToPokemon(record) {
  return {
    cards: record.cards,
    deckId: record.deckId,
    deckName: record.deckName,
    losses: record.losses,
    wins: record.wins
  };
}
