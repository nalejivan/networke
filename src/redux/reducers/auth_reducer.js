import { authApi } from '../../api/api';
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
const getUserDataThunk = () => {
  return dispath => {
    authApi.getUserData()
      .then(data => {
        if(data.resultCode === 0){
          dispath(setUserData(data.data.id, data.data.login, data.data.email, true));
        } else if(data.resultCode === 1){
          dispath(setUserData(data.data.id, data.data.login, data.data.email, false));
        }
      });
  }
}
const loginThunk = (email, password, rememberMe, captcha) => {
  return dispath => {
    authApi.loginData(email, password, rememberMe, captcha)
      .then(data => {
        // if(data.resultCode === 0){
        //   dispath(setUserData(data.data.id, data.data.login, data.data.email, true));
        // } else if(data.resultCode === 1){
        //   dispath(setUserData(data.data.id, data.data.login, data.data.email, false));
        // }
        
      });
  }
}
export { setUserData, getUserDataThunk, loginThunk }
