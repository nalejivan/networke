const SET_NEWS = 'SET_NEWS';

/** REDUCERS */
const initialState = {
  arr: [
    {text: 'Прекрасная погода, светит солнце! Хочу пиво!'},
    {text: 'Темное пиво и чипысы, члучше чем кодить!'}
  ]
}
let news_reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_NEWS:
      return {
        ...state, 
          arr: [...state.arr, {text: action.text}]
      };
    default:
      return state;
  }
}
  
export default news_reducer;

/** ACTION CREATOS */

const setNews = (text)  => {
  return {
    type: SET_NEWS,
    text: text
  }
}
/** THUNKS */

const setNewsThunk = (news) => {
  return dispath => {
    dispath(setNews(news));
  }
}
export { setNewsThunk }
