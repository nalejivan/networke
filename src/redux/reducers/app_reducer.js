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
  await dispath(getUserDataThunk());
  dispath(initialApp());
}
/*
  !Короткий синтаксис:
  const initialAppThunk = () => dispath => {
      dispath(getUserDataThunk()).then(result => {dispath(initialApp)});
    }
  }
  !Много санок в Promise.all:
  TODO: НЕПРАВИЛЬНАЯ РЕАЛИЗАЦИЯ Promise.all!!!
  const initialAppThunk = () => dispath => {
      Promise.all[dispath(getUserDataThunk())].then(result => {dispath(initialApp)});
    }
  }
*/
export { initialAppThunk }
