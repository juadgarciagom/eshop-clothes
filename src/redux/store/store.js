import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import root from '../reducers/root';
//This configuration can be seeing in redux documentation
const middlewares = [logger];

const store = createStore(root, applyMiddleware(...middlewares))

export default store;