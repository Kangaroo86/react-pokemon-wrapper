import env from '../env';

export default function setBattleState(stateObj) {
  const storedToken = localStorage.getItem('token');
  const battleId = localStorage.getItem('currentBattleId');
  // let test = JSON.stringify({ battleId: battleId, stateObj: stateObj });
  // console.log('test----------', test.length);
  // console.log('test----------', test);

  return fetch(`${env.API_BASE_URL}/battle/state`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    },
    body: JSON.stringify({ battleId: battleId, stateObj: stateObj })
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log('setBattleState data*************', data);
      return data;
    })
    .catch(err => console.log('API call setBattleState failed:', err));
}
