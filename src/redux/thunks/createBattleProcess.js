import createBattle from '../../api/createBattle';

export default function createBattleProcess(userId) {
  return (dispatch, getState, socket) => {
    return createBattle(userId)
      .then(createBattleObj => {
        localStorage.setItem('playerNum', createBattleObj.playerNum);
        localStorage.setItem('currentBattleId', createBattleObj.battleId);

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
