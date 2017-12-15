import createBattle from '../../api/createBattle';

export default function createBattleProcess(userId) {
  return (dispatch, getState, socket) => {
    return createBattle(userId)
      .then(createBattleObj => {
        dispatch({ type: 'CREATE_BATTLE', createBattleObj: createBattleObj });
      })
      .catch(error => {
        console.error(
          'createBattleProcess: Couldnt fetch createBattle: ',
          error
        );
      });
  };
}
