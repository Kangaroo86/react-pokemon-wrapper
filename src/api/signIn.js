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
      //console.log('SignIn API: Response----', response);
      if (response.status === 400) {
        return { error: 'Invalid request' };
      } else {
        return response.json();
      }
    })
    .then(record => {
      return {
        id: record.id,
        name: record.name,
        token: record.token,
        error: record.error
      };
    })
    .catch(err => err);
}
