import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import setupStore from './redux/setupStore';
import 'semantic-ui-css/semantic.min.css';
import './css/main.css';
import './css/icon.css';
//import io from 'socket.io-client';
//import env from './env';

const store = setupStore();
//const socketUrl = 'http://localhost:3000';
// const socketUrl = `${env.API_BASE_URL}`;
// const socket = io(socketUrl);
// socket.on('connect', () => {
//   console.log('We are Connected');
// });

ReactDOM.render(<App store={store} />, document.getElementById('root'));
