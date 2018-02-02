import io from 'socket.io-client'; //socket-io
import env from '../env'; //socket-io
const socketUrl = `${env.API_BASE_URL}`; //socket-io
export const socket = io(socketUrl); //exported to battlePageContainer

//initalized socket & created room
socket.on('connect', () => {
  console.log('Socket initalized: ', socket.id);
});
