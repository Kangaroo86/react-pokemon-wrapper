import env from '../env';

export default function getUsers() {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log('get user------', data);
      return data;
    })
    .catch(err => {
      console.log('getUsers API FAILED:', err);
    });
}
