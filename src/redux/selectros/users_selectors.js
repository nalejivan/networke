import { createSelector } from 'reselect';

const getUser = state => state.users.usersArr;
const getIsFetching = state => state.users.isFetching

const getUsersArrSelector = createSelector(
  getUser, 
  (uesrArr)=> {
    if(uesrArr.length > 0){
      return uesrArr.reverse();
    }else{
      return uesrArr;
    }
})

const getPageSize = (state) => {
  return state.users.pageSize
}
const getTotalCount = (state) => {
  return state.users.totalCount
}
const getCurrentPage = (state) => {
  return state.users.currentPage
}

const getFollowingInProgress = (state) => {
  return state.users.followingInProgress
}

export { getUsersArrSelector, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress};