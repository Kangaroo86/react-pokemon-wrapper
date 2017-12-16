import env from '../env';

export default function createBattle(userId) {
  const storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/battle/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    },
    body: JSON.stringify({ userOneId: userId })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(err => console.log('API call createBattle failed: ', err));
}
