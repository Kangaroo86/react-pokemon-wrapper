import getBattleState from '../../api/getBattleState';

export default function listenForUpdatesProcess() {
  return (dispatch, getState, socket) => {
    socket.on('REFRESH_STATE', () => {
      console.log('handle_ready was clicked');
      getBattleState().then(battleState => {
        socket.emit('REFRESH_DONE');
        console.log('REFRESH_DONE: ', battleState);
        dispatch({ type: 'GET_BATTLE_STATE', getBattleState: battleState });
      });
    });
  };
}
