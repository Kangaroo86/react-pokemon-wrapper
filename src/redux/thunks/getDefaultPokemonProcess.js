import getDefaultPokemon from '../../api/getDefaultPokemon';

export default function getDefaultPokemonProcess() {
  return (dispatch, getState, env) => {
    return getDefaultPokemon().then(defaultPokemon => {
      console.log('defauly pokemon thunks----', defaultPokemon);
      dispatch({
        type: 'FETCHED_DEFAULT_POKEMON',
        defaultPokemonArray: defaultPokemon
      });
      return defaultPokemon;
    });
  };
}
