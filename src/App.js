import React from 'react';
import s from './App.module.css';
import { Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileConteiner from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const history = createBrowserHistory();
const App = () => {
  return (
    <div className={s.conteiner}>
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

export default App;
