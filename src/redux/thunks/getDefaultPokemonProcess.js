import getDefaultPokemon from '../../api/getDefaultPokemon';
import envObj from '../../env';

export default function getDefaultPokemonProcess() {
  return (dispatch, getState, env) => {
    return getDefaultPokemon({
      databaseId: envObj.API_BASE_URL,
      token: envObj.AIRTABLE_TOKEN
    }).then(defaultPokemon => {
      dispatch({
        type: 'FETCHED_DEFAULT_POKEMON',
        defaultPokemonArray: defaultPokemon
      });
      return defaultPokemon;
    });
  };
}
