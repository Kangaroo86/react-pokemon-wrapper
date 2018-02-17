import { socket } from '../../socket.io/socketManager';

export default function listenForUpdatesProcess() {
  return (dispatch, getState) => {
    socket.on('UPDATED_BATTLE_STATE', obj => {
      console.log('listenForUpdate-------------', obj);
      dispatch({
        type: 'GET_BATTLE_STATE',
        getBattleState: obj
      });
    });
  };
}

// export default function listenForUpdatesProcess(obj) {
//   return (dispatch, getState) => {
//     console.log('listenForUpdate-----', obj);
//     dispatch({
//       type: 'GET_BATTLE_STATE',
//       getBattleState: obj
//     });
//   };
// }

// import getBattleState from '../../api/getBattleState';
// import { socket } from '../../components/BattlePageComponent';
//
// export default function listenForUpdatesProcess() {
//   return (dispatch, getState) => {
//     socket.on('REFRESH_STATE', () => {
//       getBattleState().then(battleState => {
//         console.log('battleState------', battleState);
//         socket.emit('REFRESH_DONE');
//         dispatch({ type: 'GET_BATTLE_STATE', getBattleState: battleState });
//       });
//     });
//   };
// }
