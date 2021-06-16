import React from 'react';
import s from './App.module.css';
import { Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { initialAppThunk } from './redux/reducers/app_reducer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Prelouder from './components/common/prelouder/prelouder';

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
          <Route history={history} path='/dialogs'>
            <DialogsContainer />
          </Route>
          <Route history={history} path='/profile/:uid?' render={ () => <ProfileConteiner />}/>
          <Route history={history} path='/users' render={ () => <UsersContainer/>}/>
          <Route history={history} path='/news'>
            <NewsContainer />
          </Route>
          <Route history={history} path='/login'>
            <Login/>
          </Route>
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