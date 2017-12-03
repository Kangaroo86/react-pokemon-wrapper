import env from '../env';

export default function doctorLogin(attribute) {
  console.log('attribute------', attribute);
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
      console.log('my respnse-------', response);
      if (response.status === 400) {
        return { error: 400 };
        //return response.text();
      }
      return response.json();
    })
    .then(record => {
      console.log('my record-------', record);
      return {
        id: record.id,
        name: record.name,
        token: record.token,
        error: record.error
      };
    })
    .catch(err => console.log('API call signIn failed: ', err));
}
