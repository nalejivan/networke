import { profileApi } from '../../api/api';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  status: null
}
/** REDUCERS */
const status_reducer = (state = initialState.status, action) => {
  switch(action.type){
    case SET_STATUS:
      return  action.status
    default:
      return state;
  }
}

export default status_reducer;

/** ACTION CREATOS */
const setStatus = status => {
  return {
    type: SET_STATUS,
    status: status
  }
};

/** THUNKS */
const getStatusThunk = (userId) =>  async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response));
  return response;
}

const putStatusThunk = (status) => async (dispatch) => {
  let response = await profileApi.putStatus(status);
  if(response !== undefined && response.data.resultCode === 0) dispatch(setStatus(status));
}
export { setStatus, getStatusThunk, putStatusThunk };


  