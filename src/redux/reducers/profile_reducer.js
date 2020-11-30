import { profileApi } from '../../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  data: {}
}
/** REDUCERS */
const profile_reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_PROFILE:
      return  action.userProfile
    default:
      return state;
  }
}

export default profile_reducer;

/** ACTION CREATOS */
const setUserProfile = userProfile => {
  return {
    type: SET_USER_PROFILE,
    userProfile: userProfile
  }
};

/** THUNKS */
const getProfileThunk = (userId) =>  dispatch => {
    return profileApi.getProfile(userId).then( response => {
      dispatch(setUserProfile(response));
      return response.userId;
    });
}

export { setUserProfile, getProfileThunk };