import rootReducer from '../redux/reducers/rootReducer';
import deepFreeze from 'deep-freeze';
import mockData from '../mock-data/defaultPokemon';

describe('rootReducer', () => {
  xit('action.type FETCHED_DEFAULT_POKEMON', () => {
    const action = {
      type: 'FETCHED_DEFAULT_POKEMON',
      defaultPokemonArray: mockData
    };

    const currentState = {
      defaultPokemonArray: []
    };

    deepFreeze(currentState);

    const nextState = {
      defaultPokemonArray: action.defaultPokemonArray
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
