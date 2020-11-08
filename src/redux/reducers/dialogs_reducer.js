import {reset} from 'redux-form'

const GET_DIALOGS_ITEMS = 'GET_DIALOGS_ITEMS';
const SET_MESSAGE = 'SET_MESSAGE';

/** REDUCERS */
const initialState = [
    { 
      user: 'One',
      message: 'Hi!'
    },
    { 
      user: 'Two',
      message: 'Hello!'
    }
];

let auth_reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_DIALOGS_ITEMS:
      return state;
    case SET_MESSAGE:
      return [...state, {user: action.to, message: action.message}];
    default:
      return state;
  }
}
  
export default auth_reducer;

/** ACTION CREATOS */
const getDialogs = ()  => {
  return {
    type: GET_DIALOGS_ITEMS
  }
}

const setMessage = (to, message) => {
  return {
    type: SET_MESSAGE,
    to: to, 
    message: message
  }
}

/** THUNKS */
const getDialogsItemsThunk = () => {
  return dispath => {
    // authIpi.getUserData().then(data => {
    //   dispath(setUserData(data.id, data.login, data.email));
    // });
    dispath(getDialogs());
  }
}
const setMessageThunk = (to, message) => {
  return dispath => {
    dispath(setMessage(to, message));
    dispath(reset('message'));
  }
}
export { getDialogs, getDialogsItemsThunk, setMessageThunk }
