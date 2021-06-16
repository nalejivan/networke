import { getUserDataThunk } from './auth_reducer';

const INITUAL_SUCCESS = 'INITUAL_SUCCESS';

/** REDUCERS */
const initialState = {
  initial: false
}
let initial_reducer = (state = initialState, action) => {
  switch(action.type){
    case INITUAL_SUCCESS:
      return {
        ...state, initial: true
      }
    default:
      return state;
  }
}
  
export default initial_reducer;

/** ACTION CREATOS */
const initialApp = () => (
  {type: INITUAL_SUCCESS}
);

/** THUNKS */
const initialAppThunk = () => async (dispath) => {
  let res = await dispath(getUserDataThunk());
  if(res) {
    dispath(initialApp());
  } else {
    console.log("ERR CCONNECT");
  }
}

export { initialAppThunk }
