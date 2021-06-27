import React from 'react';
import s from './App.module.css';
import { Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { initialAppThunk } from './redux/reducers/app_reducer';

import withSuspense from './hoc/withSuspense';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Prelouder from './components/common/prelouder/prelouder';


//import DialogsContainer from './components/Dialogs/DialogsContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileConteiner = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

const history = createBrowserHistory();
class App extends React.Component {
  componentDidMount(){
    this.props.initialAppThunk()
  }
  render(){
    if(!this.props.initial){
      return <Prelouder isFetching={true}/>
    }
    return (
      <div className={s.conteinerRow}>
        <div className={s.header}>
          <HeaderContainer/>
        </div>
        <div className={s.sidebar}>
          <Nav/>
        </div>
        <Container className={s.content}>
          <Route history={history} path='/dialogs' 
                 render={withSuspense(DialogsContainer)}/>
          <Route history={history} path='/profile/:uid?' 
                 render={withSuspense(ProfileConteiner)}/>
          <Route history={history} path='/users' 
                 render={withSuspense(UsersContainer)}/>
          <Route history={history} path='/news'
                 render={withSuspense(NewsContainer)}/>
          <Route history={history} path='/login'
                 render={withSuspense(Login)}/>
          </Container>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    initial: state.app.initial
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,{initialAppThunk})
)(App);