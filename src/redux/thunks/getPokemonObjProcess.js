import getPokemonObj from '../../api/getPokemonObj';
import getDefaultPokemon from '../../api/getDefaultPokemon';

export default function getPokemonObjProcess(pokemonId) {
  return (dispatch, getState) => {
    const scope = {};
    return getPokemonObj(pokemonId).then(pokemonObj => {
      return getDefaultPokemon()
        .then(defaultPokemon => {
          //const promiseAll = [];
          console.log('default-----', defaultPokemon);
          console.log('pokemonObj thunks------', pokemonObj);
          let defaultList = defaultPokemon.map(result => {
            scope.pokemonObj = result;
            //promiseAll.push(result);
            return result;
          });

          console.log('defaultlist----', defaultList);

          scope.pokemonObj = defaultList;
          //return Promise.all(promiseAll);
          return defaultList;
        })
        .then(defaultPokemon => {
          console.log('my scope---', scope);
          console.log('defaultPokemon-----', defaultPokemon);
        });
      // console.log('pokemonObj thunks------', result);
      // dispatch({
      //   type: 'FETCHED_POKEMON_OBJ',
      //   pokemonObj: result
      // });
    });
  };
}

// import getPokemonObj from '../../api/getPokemonObj';
// import getDefaultPokemon from '../../api/getDefaultPokemon';
//
// export default function getPokemonObjProcess(pokemonId) {
//   return (dispatch, getState) => {
//     return getPokemonObj(pokemonId).then(result => {
//       console.log('pokemonObj thunks------', result);
//       dispatch({
//         type: 'FETCHED_POKEMON_OBJ',
//         pokemonObj: result
//       });
//     });
//   };
// }
