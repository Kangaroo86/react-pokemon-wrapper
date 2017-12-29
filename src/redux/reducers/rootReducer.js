export default function rootReducer(
  currentState = {
    createBattleObj: {},
    defaultPokemonArray: [],
    errorMessage: null,
    messages: [], //WIP
    getBattleState: {},
    pokemonArray: [],
    requestBattleObj: {},
    setBattleState: {},
    userDecks: [],
    userSignup: {},
    userSignIn: {},
    users: []
  },
  action
) {
  switch (action.type) {
    case 'GET_BATTLE_STATE':
      return { ...currentState, getBattleState: action.getBattleState };

    case 'SET_BATTLE_STATE':
      return { ...currentState, setBattleState: action.battleStateObj };

    case 'CREATE_BATTLE':
      return { ...currentState, createBattleObj: action.createBattleObj };

    case 'REQUEST_BATTLE':
      return { ...currentState, requestBattleObj: action.requestBattleObj };

    //WIP
    case 'GET_ALL_MESSAGES':
      return {
        ...currentState,
        messages: [...currentState.messages, action.messages]
      };

    //dont need this
    case 'MESSAGE_CREATED':
      return {
        ...currentState,
        getTextMessage: [...currentState.getTextMessage, action.messageObj]
      };

    case 'FETCHED_SOCKET':
      return { ...currentState, socket: action.socket };

    case 'FETCHED_USERS':
      return { ...currentState, users: action.users };

    case 'USER_SIGNUP':
      return { ...currentState, userSignup: action.userSignup };

    case 'ERROR_HANDLING_MESSAGE':
      return { ...currentState, errorMessage: action.errorMessage };

    case 'USER_SIGNIN':
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

    case 'CREATE_USER_DECK':
      console.log(currentState.userDecks, action.deckObj); //it is not returing. TODO
      return {
        ...currentState,
        userDecks: [...currentState.userDecks, action.deckObj]
      };

    case 'DELETE_USER_DECK':
      console.log(action.deckId); //it is not return. TODO

      let newDeck = [...currentState.userDecks];
      let deleteDeck = newDeck.filter(deckObj => {
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
