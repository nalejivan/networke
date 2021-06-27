import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Prelouder from '../common/prelouder/prelouder';
import { getUsersArrSelector, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/selectros/users_selectors';

import { setCurrentPage, getUserThunk, followThunk} from '../../redux/reducers/users_reducer';
import Paginator from './Paginator'

class UsersApiFn extends React.Component {

  componentDidMount(){
    this.props.getUserThunk(this.props.currentPage, this.props.pageSize);
  }
  
  nextPart = (e) => {

  }

  prevPart = (e) => {

  }

  onPageChanged = (p) => {
    this.props.getUserThunk(p, this.props.pageSize);
    this.props.setCurrentPage(p);
  }

  render(){
    return <div>
      <Prelouder isFetching={this.props.isFetching}/>

      <Paginator totalItemsCount={this.props.totalCount}
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage} 
                 onPageChanged={this.onPageChanged}/>

      <Users usersArr ={this.props.usersArr}
             followingInProgress={this.props.followingInProgress}
             followThunk={this.props.followThunk}/>
             
    </div>
  }

}

let mapStateToProps = (state) => {
  return {
    usersArr: getUsersArrSelector(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}
export default connect(mapStateToProps, 
  {
    setCurrentPage,
    getUserThunk,
    followThunk
  }
)(UsersApiFn)