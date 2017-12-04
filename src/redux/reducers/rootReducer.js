export default function rootReducer(
  currentState = {
    //pokemonObj: null,
    pokemonArray: [],
    defaultPokemonArray: [],
    userDecks: [],
    userSignup: {},
    userSignIn: {},
    errorMessage: null,
    users: []
  },
  action
) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return { ...currentState, users: action.users };

    case 'USER_SIGNUP':
      return { ...currentState, userSignup: action.userSignup };

    case 'ERROR_HANDLING_MESSAGE':
      console.log('errorMessage from Reducer********', action.errorMessage);
      return { ...currentState, errorMessage: action.errorMessage };

    case 'USER_SIGNIN':
      console.log('userSignIn from Reducer********', action.userSignIn);
      return { ...currentState, userSignIn: action.userSignIn };

    case 'FETCHED_POKEMON_OBJ_LIST':
      return { ...currentState, pokemonArray: action.pokemonObjList };

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
        return deckObj.id !== action.deckId;
      });
      return {
        ...currentState,
        userDecks: deleteDeck
      };

    case 'UPDATE_DECK':
      return { ...currentState, userDecks: action.userDecks };

    default:
      return currentState;
  }
}
