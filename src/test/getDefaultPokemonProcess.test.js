import getDefaultPokemonProcess from '../redux/thunks/getDefaultPokemonProcess';

import mockData from '../mock-data/defaultPokemon';
import getDefaultPokemon from '../api/getDefaultPokemon';
jest.mock('../api/getDefaultPokemon');

describe('getDefaultPokemonProcess', () => {
  xit(
    'returns array of obj pokemon, and dispatches FETCHED_DEFAULT_POKEMON',
    () => {
      const thunk = getDefaultPokemonProcess();
      expect(typeof thunk).toBe('function');

      getDefaultPokemon.mockReturnValueOnce(Promise.resolve(mockData));

      const dispatch = jest.fn();
      const getState = () => ({});

      return thunk(dispatch, getState, {}).then(defaultPokemonArray => {
        expect(getDefaultPokemon).toBeCalled();
        expect(defaultPokemonArray).toEqual(mockData);
        expect(dispatch).toBeCalledWith({
          type: 'FETCHED_DEFAULT_POKEMON',
          defaultPokemonArray
        });
      });
    }
  );

  xit('tests error with promises', async () => {
    expect.assertions(1);
    // try {
    //   await
    // }
    const thunk = getDefaultPokemonProcess();
    // expect(typeof thunk).toBe('function');

    getDefaultPokemon.mockReturnValueOnce(Promise.reject(new Error('foo')));
    const dispatch = jest.fn();
    const getState = () => ({});
    return thunk(dispatch, getState, {}).then(error => {
      // expect(getDefaultPokemon).toBeCalled();
      expect(error).toEqual('foo');
      // expect(dispatch).toBeCalledWith({
      //   type: 'FETCHED_DEFAULT_POKEMON',
      //   error
      // });
    });
  });
});
