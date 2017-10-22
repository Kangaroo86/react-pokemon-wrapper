export default function rootReducer(
  currentState = {
    pokemonObj: null,
    pokemonArray: [],
    defaultPokemonArray: [],
    userDecks: []
  },
  action
) {
  console.log('ROOOOOOOOOOT-----', currentState.userDecks);
  switch (action.type) {
    case 'FETCHED_POKEMON_OBJ':
      let updatedPokeArray = [...currentState.pokemonArray];
      updatedPokeArray.push(action.pokemonObj);

      return {
        ...currentState,
        pokemonObj: action.pokemonObj,
        pokemonArray: updatedPokeArray
      };

    case 'FETCHED_DEFAULT_POKEMON':
      return {
        ...currentState,
        defaultPokemonArray: action.defaultPokemonArray
      };

    case 'FETCHED_USER_DECKS':
      return {
        ...currentState,
        userDecks: action.userDecks
      };

    default:
      console.log('rootReducer: default with action ', action);
      return currentState;
  }
}
