import requestBattle from '../../api/requestBattle';

export default function requestBattleProcess() {
  return (dispatch, getState, socket) => {
    return requestBattle().then(requestBattleObj => {
      dispatch({
        type: 'REQUEST_BATTLE',
        requestBattleObj: requestBattleObj
      });
    });
  };
}
