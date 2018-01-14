export default function clearCurrentStatesProcess() {
  return (dispatch, getState, socket) => {
    dispatch({
      type: 'CLEAR_CURRENT_STATES',
      createBattleObj: {},
      defaultPokemonArray: [],
      errorMessage: null,
      messages: [],
      getBattleState: {},
      pokemonArray: [],
      requestBattleObj: {},
      setBattleState: {},
      userDecks: [],
      userSignup: {},
      userSignIn: {},
      users: []
    });
  };
}
