import getDefaultPokemon from '../../api/getDefaultPokemon';
import envObj from '../../env';

export default function getDefaultPokemonProcess() {
  return (dispatch, getState, env) => {
    return getDefaultPokemon({
      databaseId: envObj.AIRTABLE_DATABASE_ID,
      token: envObj.AIRTABLE_TOKEN
    })
      .then(defaultPokemon => {
        dispatch({
          type: 'FETCHED_DEFAULT_POKEMON',
          defaultPokemonArray: defaultPokemon
        });
        return defaultPokemon;
      })
      .catch(err => {
        return err;
        //console.log('getDefaultPokemon: Couldnt fecth defaultDecks ', err);
      });
  };
}
