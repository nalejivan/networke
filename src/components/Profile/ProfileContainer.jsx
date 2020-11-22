import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from "react-router";
import { setUserProfile, getProfileThunk } from '../../redux/reducers/profile_reducer';
import { setStatus, getStatusThunk, putStatusThunk } from '../../redux/reducers/status_reducer';
import ProfileInfo from './ProfileInfo';
import { compose } from 'redux';
import Prelouder from '../common/prelouder/prelouder';

class ProfileConteiner extends React.Component {
  componentDidMount(){
    let id;
    if(this.props.match.params.uid !== undefined){
      id = this.props.match.params.uid;
    }else if(this.props.match.params.uid === undefined && this.props.userId !== undefined){
      id = this.props.userId;
    } 
    if(id === undefined){
      return this.props.history.push('./login');
    }else{
      this.props.getProfileThunk(id);
      this.props.getStatusThunk(id);
    }
  }
  componentDidUpdate(){
    let ProfileData = this.props.userProfile;
    let idUri = (this.props.match.params.uid !== undefined) 
        ? parseInt(this.props.match.params.uid) : undefined;
    let idState = this.props.userId;
    
    if(ProfileData){
      if(idUri !== undefined){
        if(ProfileData.userId !== idUri){
          this.props.getProfileThunk(idUri);
          this.props.getStatusThunk(idUri);
        }
      }else{
        if(ProfileData.userId !== idState){
          if(idState !== null){
            this.props.getProfileThunk(idState);
            this.props.getStatusThunk(idState);
          }else{
            return this.props.history.push('./login');
          }
        }
      }
    } 
  }
  render(){
    if(!this.props.userProfile){
      return <Prelouder isFetching={true}/>
    } 
    return(
      (this.props.match.params.uid === undefined && this.props.userId === undefined)
        ? 
          <Redirect to={"/login"}/> 
        :
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
