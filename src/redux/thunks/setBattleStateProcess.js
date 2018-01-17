import { socket } from '../../components/BattlePageComponent';

export default function setBattleStateProcess(stateObj) {
  return (dispatch, getState) => {
    socket.emit('STATE_UPDATED', stateObj);

    // socket.on('UPDATED_BATTLE_STATE', obj => {
    //   console.log('backend result-----------', obj);
    //   dispatch({
    //     type: 'GET_BATTLE_STATE',
    //     getBattleState: obj
    //   });
    // });

    // dispatch({
    //   type: 'GET_BATTLE_STATE',
    //   getBattleState: stateObj
    // });
  };
}

// import setBattleState from '../../api/setBattleState';
// import { socket } from '../../components/BattlePageComponent';
//
// export default function setBattleStateProcess(stateObj) {
//   return (dispatch, getState) => {
//     return setBattleState(stateObj).then(battleStateObj => {
//       socket.emit('STATE_UPDATED', stateObj);
//       console.log('setBattleState----', battleStateObj);
//       // dispatch({
//       //   type: 'SET_BATTLE_STATE',
//       //   setBattleState: battleStateObj
//       // });
//       dispatch({
//         type: 'GET_BATTLE_STATE',
//         getBattleState: battleStateObj
//       });
//     });
//   };
// }
