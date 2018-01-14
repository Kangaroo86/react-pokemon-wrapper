//import getBattleState from '../../api/getBattleState';
// import { socket } from '../../components/BattlePageComponent';
//
// export default function listenForMessageUpdateProcess(messageObj) {
//   return (dispatch, getState) => {
//     socket.emit('MESSAGE_CREATE', messageObj);
//   };
// }

/*

CLIENT => SERVER   socket.emit  SEND_MESSAGE
    => dispatch MESSAGE_SENT Redux

SERVER => CLIENT  socket.on  RECEIVE_MESSAGE
  => dispatch MESSAGE_RECEIVED


*/
