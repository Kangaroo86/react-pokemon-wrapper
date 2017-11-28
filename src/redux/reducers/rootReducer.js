export default function rootReducer(
  currentState = {
    pokemonObj: null,
    pokemonArray: [],
    defaultPokemonArray: [],
    userDecks: [],
    userSignup: {},
    userSignIn: {},
    errorUserSignIn: {},
    users: []
  },
  action
) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return { ...currentState, users: action.users };

    case 'USER_SIGNUP':
      return { ...currentState, userSignup: action.userSignup };

    case 'ERROR_USERIN_MESSAGE':
      return { ...currentState, errorUserSignIn: action.errorUserSignIn };

    case 'USER_SIGNIN':
      console.log('rootReducer USER_SIGNIN userSignIn=', action.userSignIn);
      return { ...currentState, userSignIn: action.userSignIn };

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

    case 'DELETE_USER_DECK':
      let deleteDeck = currentState.userDecks.filter(deckObj => {
        return deckObj.id !== action.id;
      });
      return {
        ...currentState,
        userDecks: deleteDeck
      };

    case 'UPDATE_DECK': // TODO: WIP
      return { ...currentState, userDecks: action.userDecks };

    default:
      console.log('rootReducer: default with action ', action);
      return currentState;
  }
}
