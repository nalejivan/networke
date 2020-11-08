import React from 'react';
import { connect } from 'react-redux';
import { setUserData, getUserDataThunk } from '../../redux/reducers/auth_reducer';

import Header from './Header';

class HeaderContainer extends React.Component {

  componentDidMount(){
    this.props.getUserDataThunk();
  }

  render(){
    return <Header login={this.props.login} auth={this.props.auth}/>
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
  getUserDataThunk
})(HeaderContainer);