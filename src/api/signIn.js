import env from '../env';

export default function doctorLogin(attribute) {
  return fetch(`${env.API_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: attribute.name,
      password: attribute.password
    })
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(record => {
      console.log('sign in record-------', record);
      return {
        id: record.id,
        name: record.name,
        token: record.token
      };
    })
    .catch(err => console.log('SIGNIN API CALL:::', err));
}
