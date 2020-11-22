import { createStore, combineReducers, applyMiddleware } from 'redux';
import app_reducer from './reducers/app_reducer';
import status_reducer from './reducers/status_reducer';
import auth_reducer from './reducers/auth_reducer';
import users_reducer from './reducers/users_reducer';
import profile_reducer from './reducers/profile_reducer';
import dialogs_reducer from './reducers/dialogs_reducer';
import news_reducer from './reducers/news_reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
  app: app_reducer,
  auth: auth_reducer,
  users: users_reducer,
  userProfile: profile_reducer,
  dialogs: dialogs_reducer,
  news: news_reducer,
  status: status_reducer,
  form: formReducer
});
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
window.store = store