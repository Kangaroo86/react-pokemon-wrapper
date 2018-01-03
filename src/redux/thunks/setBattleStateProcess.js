import setBattleState from '../../api/setBattleState';
import { socket } from '../../components/BattlePageComponent';

export default function setBattleStateProcess(stateObj) {
  return (dispatch, getState) => {
    return setBattleState(stateObj).then(battleStateObj => {
      socket.emit('STATE_UPDATED');

      dispatch({
        type: 'SET_BATTLE_STATE',
        setBattleState: battleStateObj
      });
    });
  };
}
