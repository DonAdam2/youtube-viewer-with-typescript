import {createStore, applyMiddleware} from 'redux';
//root reducer
import rootReducer from './rootReducer';
//middle wares
import thunkMiddleware from 'redux-thunk';

const isDevelopment = process.env.NODE_ENV === 'development',
    middleWares: any = [];

// log redux data in development mode only
if (isDevelopment) {
    const {logger} = require('redux-logger');
    middleWares.push(logger);
}

const configureStore = () => createStore(
    rootReducer,
    /* preloadedState, */
    applyMiddleware(thunkMiddleware, ...middleWares)
);

export default configureStore;
