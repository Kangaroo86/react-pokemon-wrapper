export default function recordToPokemon(record) {
  return {
    deckId: record.deckId,
    deckName: record.deckName,
    wins: record.wins,
    losses: record.losses,
    pokeObj: record.pokeObj
  };
}
