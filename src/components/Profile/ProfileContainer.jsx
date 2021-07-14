import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from "react-router"
import { setUserProfile, getProfileThunk } from '../../redux/reducers/profile_reducer'
import { setStatus, getStatusThunk, putStatusThunk } from '../../redux/reducers/status_reducer'
import { getUserProfileSelector, getStatusSelector, getUserIdSelector } from '../../redux/selectros/profile_selectors'
import ProfileInfo from './ProfileStatus/ImageProfile'
import { compose } from 'redux'
import Prelouder from '../common/prelouder/prelouder'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { Container, Row, Col } from 'react-bootstrap'

class ProfileConteiner extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      initional: false,
      editStatus: false
    }
  }

  componentDidMount(){
    let uid = this.props.match.params.uid;
    let userId = this.props.userId;
    const initFn = id => {
      Promise.all([
        this.props.getProfileThunk(id), 
        this.props.getStatusThunk(id)]).then(values => { 
          this.setState({initional: true});
      }); 
    }
    if(uid !== undefined){
      initFn(uid); 
      this.setState({editStatus: false});
    }else if(uid === undefined && userId !== undefined){
      initFn(userId); 
      this.setState({editStatus: true});
    }else if(uid === undefined &&  userId === undefined ){
      return this.props.history.push('./login');
    }
  }

  render(){
    if(!this.state.initional){
      return <Prelouder isFetching={true}/>
    } 
    return(
      (this.props.match.params.uid === undefined && this.props.userId === undefined)
        ? 
          <Redirect to={"/login"}/> 
        : 
        <Container>
          <Row className="justify-content-md-center">  
            <Col xs lg="3">
              <ProfileInfo userProfile={this.props.userProfile}/>
            </Col>
            <Col xs lg="9">
              <h4>fullName: {this.props.userProfile.fullName}</h4>
              <h5>aboutMe: {this.props.userProfile.aboutMe}</h5>
              <ProfileStatus 
                  status={this.props.status} 
                  putStatus={this.props.putStatusThunk}
                  setStatus={this.props.setStatus}
                  editStatus={this.state.editStatus}/>
            </Col>  
          </Row>    
        </Container>
      
    )
  }
}
let mapStateToProps = (state) => {
  return {
    userProfile: getUserProfileSelector(state),
    status: getStatusSelector(state),
    userId: getUserIdSelector(state)
  }
}
export default compose(
  connect(mapStateToProps, { 
    setUserProfile, 
    getProfileThunk,
    getStatusThunk, 
    putStatusThunk,
    setStatus
  }),
  withRouter
)(ProfileConteiner)
