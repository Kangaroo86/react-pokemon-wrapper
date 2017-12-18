import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import io from 'socket.io-client'; //socket-io
import env from '../env'; //socket-io

const socketUrl = `${env.API_BASE_URL}`;
const socket = io(socketUrl);
socket.on('connect', () => {
  //who emit 'connect' on the backend
  console.log('Socket Connected. Initalized from redux store');
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(thunkMiddleware.withExtraArgument(socket))
);

export default function setupStore() {
  return createStore(rootReducer, enhancers);
}
