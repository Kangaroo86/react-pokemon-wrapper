export default function recordToPokemon(record) {
  return {
    id: record.id,
    name: record.fields.name,
    wins: record.fields.wins,
    losses: record.fields.losses,
    cards: record.fields.cards
  };
}
