import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import io from 'socket.io-client';
import env from '../env';

const socketUrl = `${env.API_BASE_URL}`;
const socket = io(socketUrl);
socket.on('connect', () => {
  console.log('We are Connected');
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(thunkMiddleware.withExtraArgument(socket))
);

export default function setupStore() {
  return createStore(rootReducer, enhancers);
}
