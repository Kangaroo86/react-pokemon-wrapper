import getPokemonObj from '../../api/getPokemonObj';
import getDefaultPokemon from '../../api/getDefaultPokemon';

export default function getPokemonObjProcess(pokemonId) {
  return (dispatch, getState) => {
    const scope = {};
    const promiseAll = [];
    return getDefaultPokemon()
      .then(defaultList => {
        //console.log('defaultList------', defaultList);
        scope.defaultPokemon = defaultList;

        const promises = [];

        let eachId = defaultList.map(pokeObj => {
          return pokeObj.pokemonId;
          //console.log('mypokeObj----', pokeObj);
        });

        eachId.forEach(id => {
          promises.push(getPokemonObj(id));
        });

        console.log('eachId------', eachId);
        return Promise.all(promises);
      })
      .then(pokemonObj => {
        scope.defaultPokemon.forEach(obj => {
          console.log('obj*********', obj.pokemonId);
          pokemonObj.find(character => {
            console.log('character*********', character.id);
            character.id === obj.pokemonId;
          });
        });
        console.log('pokemonObj--------', pokemonObj);
        console.log('scope----', scope);
        //console.log('pokemonObj-----', pokemonObj);
      });
    // console.log('pokemonObj thunks------', result);
    // dispatch({
    //   type: 'FETCHED_POKEMON_OBJ',
    //   pokemonObj: result
    // });
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
