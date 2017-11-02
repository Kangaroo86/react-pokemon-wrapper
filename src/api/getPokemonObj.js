export default function getPokemon(pokemonId) {
  var Pokedex = require('pokeapi-js-wrapper');
  let options = {
    protocol: 'https',
    cache: true
  };
  var P = new Pokedex.Pokedex(options);
  return P.getPokemonByName(pokemonId) // with Promise
    .then(response => {
      //console.log('getPokemonOBJ by name response: ', response);
      return response;
    });
}
