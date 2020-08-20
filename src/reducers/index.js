import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  form: formReducer,
  events: eventReducer,
});

export default rootReducer;
