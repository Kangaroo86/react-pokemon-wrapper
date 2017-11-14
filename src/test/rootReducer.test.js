import rootReducer from '../redux/reducers/rootReducer';
import deepFreeze from 'deep-freeze';
import mockData from '../mock-data/index';

describe('rootReducer', () => {
  xit('action.type FETCHED_POKEMON_OBJ', () => {
    const action = {
      type: 'FETCHED_POKEMON_OBJ',
      pokemonArray: [...mockData.records]
    };

    const currentState = {
      pokemonArray: [],
      pokemonObj: undefined
    };
    deepFreeze(currentState);

    const nextState = {
      pokemonArray: action.pokemonArray,
      pokemonObj: undefined
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
