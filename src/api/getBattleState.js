import env from '../env';

export default function getBattleState() {
  const storedToken = localStorage.getItem('token');
  const battleId = localStorage.getItem('currentBattleId');

  return fetch(`${env.API_BASE_URL}/battle/${battleId}/state`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    }
  })
    .then(response => {
      console.log(
        'response from getState******************',
        typeof response,
        response
      );
      return response.json();
    })
    .then(data => {
      console.log('data from getState******************', typeof data, data);
      return data;
    })
    .catch(err => console.log('API call getBattleState failed:', err));
}
