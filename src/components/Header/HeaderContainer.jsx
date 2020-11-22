import React from 'react';
import { connect } from 'react-redux';
import { setUserData, logOutThunk } from '../../redux/reducers/auth_reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  render(){
    return <Header login={this.props.login} auth={this.props.auth} logOutThunk={this.props.logOutThunk}/>
  }
}

let mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    login: state.auth.login
  }
}
export default connect(mapStateToProps, {
  setUserData, 
  logOutThunk
})(HeaderContainer);