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
    //socket: null,
    //socketID: null,
    userDecks: [],
    userSignup: {},
    userSignIn: {},
    users: []
  },
  action
) {
  switch (action.type) {
    case 'GET_BATTLE_STATE':
      //console.log('GET_BATTLE_STATE***********', currentState.getBattleState);
      return { ...currentState, getBattleState: action.getBattleState };

    case 'SET_BATTLE_STATE':
      return { ...currentState, setBattleState: action.battleStateObj };

    // case 'RECEIVED_SOCKET_ID':
    //   console.log('currentState-------------', currentState);
    //   console.log('action.socketID -------------', action.socketID);
    //   return { ...currentState, socketID: action.socketID };

    case 'CREATE_BATTLE':
      //console.log('action.createBattleObj***********', action.createBattleObj);
      // console.log(
      //   'currentState.createBattleObj***********',
      //   currentState.createBattleObj
      // );//this return empty {}
      return { ...currentState, createBattleObj: action.createBattleObj };

    case 'REQUEST_BATTLE':
      return { ...currentState, requestBattleObj: action.requestBattleObj };

    //WIP
    case 'GET_ALL_MESSAGES':
      let combinedMessages = currentState.messages.concat(action.messages);
      console.log('combinedMessages>>>>>>>>>>>>>>>>>>????', combinedMessages);
      return {
        ...currentState,
        messages: combinedMessages
      };

    //dont need this
    case 'MESSAGE_CREATED':
      return {
        ...currentState,
        getTextMessage: [...currentState.getTextMessage, action.messageObj]
      };

    //not used in production
    // case 'FETCHED_SOCKET':
    //   return { ...currentState, socket: action.socket };

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
        userDecks: [...currentState.userDecks, action.userDecks]
      };

    case 'DELETE_USER_DECK':
      let currentDecks = [...currentState.userDecks];
      let deleteDeck = currentDecks.filter(deckObj => {
        return deckObj.id !== Number(action.deckId);
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
