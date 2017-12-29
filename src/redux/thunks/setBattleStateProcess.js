import setBattleState from '../../api/setBattleState';

export default function setBattleStateProcess(stateObj) {
  return (dispatch, getState, socket) => {
    return setBattleState(stateObj).then(battleStateObj => {
      socket.emit('STATE_UPDATED');
      dispatch({
        type: 'SET_BATTLE_STATE',
        setBattleState: battleStateObj
      });
    });
  };
}