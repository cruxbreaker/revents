import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer, devToolsEnhancer());
