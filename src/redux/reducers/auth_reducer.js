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
const getUserDataThunk = () => (dispath) => {
  return authApi.getUserData()
    .then(response => {
      if(response.resultCode === 0){
        dispath(setUserData(response.data.id, response.data.login, response.data.email, true));
      } else if(response.resultCode === 1){
        dispath(setUserData(response.data.id, response.data.login, response.data.email, false));
      } 
    });
}
const loginThunk = (email, password, rememberMe) => {
  return dispath => {
    authApi.login(email, password, rememberMe)
      .then(response => {  
        if(response.data.resultCode === 0){
          dispath(getUserDataThunk());
        } else {
          let message = response.data.messages.lenght > 0 ? response.data.messages : "Some error";
            dispath(stopSubmit('login', {_error: message}));
        }      
      });
  }
}
const logOutThunk = () => {
  return dispath => {
    authApi.logOut()
      .then(response => {     
        if(response.data.resultCode === 0){
          dispath(setUserData(null, null, null, false));
        } else {
          console.error(response)
        }      
      });
  }
}
export { setUserData, getUserDataThunk, loginThunk, logOutThunk }
