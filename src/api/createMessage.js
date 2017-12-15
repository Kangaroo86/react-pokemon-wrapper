import env from '../env';

export default function createMessage(userId, battleId, text) {
  const storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`
    },
    body: JSON.stringify({ user: userId, battleId: battleId, text: text })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(err => console.log('API call createMessage failed: ', err));
}
