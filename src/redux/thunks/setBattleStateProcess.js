import setBattleState from '../../api/setBattleState';
import { socket } from '../../components/BattlePageComponent';

export default function setBattleStateProcess(stateObj) {
  return (dispatch, getState) => {
    return setBattleState(stateObj).then(battleStateObj => {
      socket.emit('STATE_UPDATED');
      console.log('setBattleState----', battleStateObj);
      // dispatch({
      //   type: 'SET_BATTLE_STATE',
      //   setBattleState: battleStateObj
      // });
      dispatch({
        type: 'GET_BATTLE_STATE',
        getBattleState: battleStateObj
      });
    });
  };
}
