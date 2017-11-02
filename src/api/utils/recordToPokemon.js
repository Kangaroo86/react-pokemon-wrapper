export default function recordToPokemon(record) {
  return {
    id: record.id,
    name: record.name,
    pokemonId: record.pokemonId
  };
}
