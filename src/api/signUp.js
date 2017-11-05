import env from '../env';

export default function signUp(attribute) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attribute)
  }).then(response => {
    console.log('RESPONSE FROM API------', response);
    return response.json();
  });
}
