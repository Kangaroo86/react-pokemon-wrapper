import createBattle from '../../api/createBattle';
//import { socket } from '../../socket.io/socketManager';

/*when a player create a battle, the backend will
sent back a battleId and assign the player's id*/

export default function createBattleProcess() {
  return (dispatch, getState) => {
    return createBattle()
      .then(createBattleObj => {
        localStorage.setItem('playerNum', createBattleObj.playerNum);
        localStorage.setItem('currentBattleId', createBattleObj.battleId);

        // socket.emit('registerRoom', createBattleObj.battleId);

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
