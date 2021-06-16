import { usersApi } from '../../api/api';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';
const FOLLOWED = 'FOLLOWED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
  usersArr: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1, 
  isFetching: false,
  userProfile: null,
  followingInProgress: []
}

const users_reducer = (state = initialState, action) => { 
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        usersArr: state.usersArr.map( u => {
          if(u.id === action.id){
            return {...u, followed: action.val}
          }else{
            return u;
          }  
        }).reverse()
      }
    case SET_USERS:
      return {
        ...state,
        usersArr: action.usersArr
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case TOTAL_COUNT:
      return {
        ...state, 
        totalCount: action.totalCount
      }
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetcing
      }
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state, followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.id]
        : [...state.followingInProgress.filter(id =>  id !== action.id)]
      }
    default:
      return state;
  }
}


export default users_reducer;

const followed = (id, val) => {
  return {
    type: FOLLOWED,
    id: id,
    val: val
  }
}
const setUsers = (usersArr) => {
  return {
    type: SET_USERS,
    usersArr: usersArr
  }
}
const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE, 
    currentPage: currentPage
  }
}
const setUsersTotalCount = (totalCount) => {
  return {
    type: TOTAL_COUNT,
    totalCount: totalCount
  }
}
const toggleFetching = (isFetcing) => {
  return {
    type: IS_FETCHING,
    isFetcing: isFetcing
  }
}
const toggleFollowingInProgress = (id, val) => { 
  return { 
    type: TOGGLE_FOLLOWING_IN_PROGRESS, 
    id: id,
    isFetching: val
  } 
}

const getUserThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleFetching(true));
  let data = await usersApi.getUsers(currentPage, pageSize);
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount));
  dispatch(toggleFetching(false));
}

const followThunk = (id, val) => async (dispatch) => {
  dispatch(toggleFollowingInProgress(id, true));
  let data = await usersApi.follow(id, val)
  if(data.resultCode === 0){
    dispatch(toggleFollowingInProgress(id, false));
    dispatch(followed(id, val));
  }
}

export { 
  setUsers, setCurrentPage, 
  setUsersTotalCount, getUserThunk, followThunk
}
