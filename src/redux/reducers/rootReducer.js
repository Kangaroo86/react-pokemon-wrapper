export default function rootReducer(
  currentState = {
    battleMessage: '', //delete? handled by socket
    createBattleObj: {},
    defaultPokemonArray: [],
    errorMessage: null,
    getMessage: [], //delete? handled by socket
    getBattleState: {},
    pokemonArray: [],
    requestBattleObj: {},
    socket: null,
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
      console.log('action.battleState-------', action.battleState);
      console.log(
        'currentState.getBattleState-------',
        currentState.getBattleState
      );
      return { ...currentState, getBattleState: action.battleState };

    case 'SET_BATTLE_STATE':
      return { ...currentState, setBattleState: action.battleStateObj };

    case 'CREATE_BATTLE':
      return { ...currentState, createBattleObj: action.createBattleObj };

    case 'REQUEST_BATTLE':
      return { ...currentState, requestBattleObj: action.requestBattleObj };

    //delete? handled by socket
    case 'GET_MESSAGE':
      return { ...currentState, getMessage: action.textMessage };

    //delete? handled by socket
    case 'CREATE_MESSAGE':
      return { ...currentState, battleMessage: action.textMessage };

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
      return {
        ...currentState,
        userDecks: [...currentState.userDecks, action.deckObj]
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
