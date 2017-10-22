export default function recordToPokemon(record) {
  return {
    id: record.id,
    pokemonName: record.fields.pokemonName,
    pokemonId: record.fields.pokemonId
  };
}
