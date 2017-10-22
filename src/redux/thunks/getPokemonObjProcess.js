import getPokemonObj from '../../api/getPokemonObj';

export default function getPokemonObjProcess(pokemonId) {
  return (dispatch, getState) => {
    return getPokemonObj(pokemonId).then(result => {
      dispatch({
        type: 'FETCHED_POKEMON_OBJ',
        pokemonObj: result
      });
      return result;
    });
  };
}
