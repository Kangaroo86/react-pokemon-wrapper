// //import requestBattle from '../../api/requestBattle';
// //import io from 'socket.io-client'; //socket-io
// //import env from '../env'; //socket-io
// //import getBattleStateProcess from './getBattleStateProcess';
// import getBattleState from '../../api/getBattleState';
//
// export default function emitUpdatesProcess() {
//   return (dispatch, getState, socket) => {
//     console.log('socket--------------', socket);
//
//     socket.emit('STATE_UPDATED', () => {
//       getBattleState().then(battleState => {
//         console.log(
//           'battleState  from listendforUpdate----------',
//           battleState
//         );
//         dispatch({ type: 'GET_BATTLE_STATE', getBattleState: battleState });
//       });
//     });
//   };
// }
