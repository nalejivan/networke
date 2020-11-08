import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { setUserProfile, getProfileThunk } from '../../redux/reducers/profile_reducer';
import { setStatus, getStatusThunk, putStatusThunk } from '../../redux/reducers/status_reducer';

import ProfileInfo from './ProfileInfo';
import { compose } from 'redux';

class ProfileConteiner extends React.Component {
  componentDidMount(){
    let id = this.props.match.params.uid;
    if(id !== undefined && id !== null){
      this.props.getProfileThunk(id);
    }
  }
  componentDidUpdate(){
    let id = this.props.userId;
    if(undefined !== id !== null && this.props.status == null){
      this.props.getStatusThunk(id);
    }
  }
  render(){
    return(
      <ProfileInfo {...this.props} 
        status={this.props.status} 
        profile={this.props.userProfile}
        putStatus={this.props.putStatusThunk}
        setStatus={this.props.setStatus}/>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile,
    status: state.status, 
    userId: state.auth.userId
  }
}
export default compose(
  connect(mapStateToProps, 
    { 
      setUserProfile, 
      getProfileThunk,
      getStatusThunk, 
      putStatusThunk,
      setStatus
    }),
  withRouter
)(ProfileConteiner)
