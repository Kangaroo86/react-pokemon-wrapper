import env from '../env';

export default function getToken(userInfo) {
  return fetch(`${env.API_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  }).then(response => {
    console.log('RESPONSE------', response);
    return response.json();
  });
}
