import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Prelouder from '../common/prelouder/prelouder';

import { setCurrentPage, getUserThunk, followThunk} from '../../redux/reducers/users_reducer';
class UsersApiFn extends React.Component {

  componentDidMount(){
    this.props.getUserThunk(this.props.currentPage, this.props.pageSize);
  }
  
  onPageChanged = (p) => {
    this.props.getUserThunk(p, this.props.pageSize);
  }

  render(){
    let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
      if(i >= this.props.currentPage - 3 && i < this.props.currentPage + 10){
        pages.push(i+1);
      }
    }
    
    return <div>
      <Prelouder isFetching={this.props.isFetching}/>
       <Users onPageChanged={this.onPageChanged} 
              pages = {pages} 
              usersArr ={this.props.usersArr}
              followingInProgress={this.props.followingInProgress}
              followThunk={this.props.followThunk}/>
    </div>
  }

}

let mapStateToProps = (state) => {
  return {
    usersArr: state.users.usersArr,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  }
}

export default connect(mapStateToProps, 
  {
    setCurrentPage,
    getUserThunk,
    followThunk
  }
)(UsersApiFn)