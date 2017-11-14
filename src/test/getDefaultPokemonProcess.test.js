import getDefaultPokemonProcess from '../redux/thunks/getDefaultPokemonProcess';

import mockData from '../mock-data/defaultPokemon';
import getDefaultPokemon from '../api/getDefaultPokemon';
jest.mock('../api/getDefaultPokemon');

describe('getUserDecksProcess', () => {
  xit(
    'returns array of obj pokemon, and dispatches FETCHED_DEFAULT_POKEMON',
    () => {
      const thunk = getDefaultPokemonProcess();
      expect(typeof thunk).toBe('function');

      getDefaultPokemon.mockReturnValueOnce(Promise.resolve(mockData));

      const dispatch = jest.fn();
      const getState = () => ({});

      return thunk(dispatch, getState, {}).then(pokemonObj => {
        expect(getDefaultPokemon).toBeCalled();
        expect(pokemonObj).toEqual(mockData);
        expect(dispatch).toBeCalledWith({
          type: 'FETCHED_DEFAULT_POKEMON',
          pokemonObj
        });
      });
    }
  );
});
