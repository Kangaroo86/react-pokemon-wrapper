import getUsers from '../../api/getUsers';

export default function getPokemonObjProcess(pokemonId) {
  return (dispatch, getState) => {
    return getUsers().then(result => {
      dispatch({
        type: 'FETCHED_USERS',
        users: result
      });
      return result;
    });
  };
}
