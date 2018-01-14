// import env from '../env';
//
// export default function getAllMessages() {
//   const storedToken = localStorage.getItem('token');
//   const battleId = localStorage.getItem('currentBattleId');
//
//   return fetch(`${env.API_BASE_URL}/message/battle/${battleId}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${storedToken}`
//     }
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       return data;
//     })
//     .catch(err => console.log('API call getMessage failed:', err));
// }
