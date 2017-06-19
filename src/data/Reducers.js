import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { app } from './form/FormReducers';

const globalState = combineReducers({
  app,
  form: formReducer,
});

export default globalState;
