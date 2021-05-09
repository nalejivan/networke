const SET_NEWS = 'SET_NEWS';
const DEL_NEWS = 'DEL_NEWS';
/** REDUCERS */
const initialState = {
  arr: [
    {id: 1, text: 'Прекрасная погода, светит солнце! Хочу пиво!'},
    {id: 2, text: 'Темное пиво и чипысы, члучше чем кодить!'}
  ]
}
let news_reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_NEWS:
      return {
        ...state, 
          arr: [...state.arr, {text: action.text}]
      };
    case DEL_NEWS:
      return {
        ...state, arr: state.arr.filter(p => p.id !== action.id)
      };
    default:
      return state;
  }
}
  
export default news_reducer;

/** ACTION CREATOS */

const addPostActionCreator = (text)  => {
  return {
    type: SET_NEWS,
    text: text
  }
}

const delPostActionCreater = id => { 
  return {type: DEL_NEWS, id: id} 
}

/** THUNKS */

const setNewsThunk = (news) => {
  return dispath => {
    dispath(addPostActionCreator(news));
  }
}
export { setNewsThunk, addPostActionCreator, delPostActionCreater }