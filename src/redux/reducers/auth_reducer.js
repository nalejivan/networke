import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = 'SET_USER_DATA';

/** REDUCERS */
const initialState = {
  userId: null, login: null, email: null, auth: null
}
let auth_reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_DATA:
      return {
        ...state, userId: action.userId, login: action.login, email: action.email, auth: action.auth
      }
    default:
      return state;
  }
}
  
export default auth_reducer;

/** ACTION CREATOS */
const setUserData = (userId, login, email, auth)  => {
  return {
    type: SET_USER_DATA,
    userId: userId,
    login: login, 
    email: email,
    auth: auth
  }
}

/** THUNKS */
const getUserDataThunk = () => async (dispath) => {
  let response = await authApi.getUserData();
  if(response === undefined) {
    return false;
  } else if(response.resultCode === 0){
    dispath(setUserData(response.data.id, response.data.login, response.data.email, true));
    return true;
  } else if(response.resultCode === 1){
    dispath(setUserData(response.data.id, response.data.login, response.data.email, false));
    return true;
  } 
}

const loginThunk = (email, password, rememberMe) => async (dispath) => {
  let response = await authApi.login(email, password, rememberMe);
  if(response.data.resultCode === 0){
    dispath(getUserDataThunk());
  } else if(response.data.resultCode === 10) {
    let message = response.data.messages.lenght > 0 ? response.data.messages : response.data.messages[0];
    // let error = {};
    // error.email = "no email";
    // throw new SubmissionError(error.email)
    dispath(stopSubmit('login', {_error: message}));
    // dispath(stopSubmit('login', {_error: message}));
  }      
}

const logOutThunk = () => async (dispath) => {
  let response = await authApi.logOut();
  if(response.data.resultCode === 0){
    dispath(setUserData(null, null, null, false));
  } else {
    console.error(response)
  }  
}
export { setUserData, getUserDataThunk, loginThunk, logOutThunk }
