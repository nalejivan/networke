import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../components/common/prelouder/prelouder'

let withRedirect = (Component) => {
  let mapStateToProps = (state) => {
    return { auth: state.auth.auth }
  }
  let wrapRedirect = (props) => {
      if (props.auth === true){
        return <Component {...props} />;
      } else if (props.auth === false) {
        return <Redirect to='/login' />;
      } else if (props.auth === null) {
        return <Preloader isFetching={true}/>;
      }
  }
  return connect(mapStateToProps)(wrapRedirect);;
}
export default withRedirect;