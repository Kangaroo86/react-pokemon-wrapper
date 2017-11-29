import getPokemonObj from '../../api/getPokemonObj';
import getDefaultPokemon from '../../api/getDefaultPokemon';

export default function getPokemonObjProcess(pokemonId) {
  return (dispatch, getState) => {
    return getPokemonObj(pokemonId).then(result => {
      console.log('pokemonObj thunks------', result);
      dispatch({
        type: 'FETCHED_POKEMON_OBJ',
        pokemonObj: result
      });
      return result;
    });
  };
}
