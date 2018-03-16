//import { socket } from '../../components/BattlePageComponent';
import { socket } from '../../socket.io/socketManager';

export default function setBattleStateProcess(stateObj) {
  return (dispatch, getState) => {
    console.log('stateObj-----------------------------------', stateObj);
    socket.emit('STATE_UPDATED', stateObj);
  };
}
