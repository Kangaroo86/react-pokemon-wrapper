export default function listenForUpdatesProcess(obj) {
  return (dispatch, getState) => {
    dispatch({
      type: 'GET_BATTLE_STATE',
      getBattleState: obj
    });
  };
}

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
