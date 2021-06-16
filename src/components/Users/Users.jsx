import React from 'react';
import { NavLink } from 'react-router-dom'
import { Button, Row, Col, Image} from 'react-bootstrap';
import s from './Users.module.css';
import icon from './user.jpg';

const User = ({item, followingInProgress, followThunk}) => {
  return (
      <div className={s.container + " text-center"}>
                  <Row>
                    <Col xs={2} md={2}>
                      <NavLink to={'/profile/' + item.id}>
                        <Image className={s.img + " mx-auto d-block"} src={(item.photos.small == null)? icon: item.photos.small} roundedCircle />
                        <div className={s.id}>{item.id}</div>
                        <div className={s.name}>{item.name}</div>
                      </NavLink>
                      <Button disabled={followingInProgress.some(id => id === item.id)} 
                        variant="success"
                        onClick={() => {followThunk(item.id, item.followed? false: true)}}>
                        { item.followed? 'Unfollowed': 'Followed' }
                      </Button>
                    </Col>
                  </Row>
              </div>
  )
}

const Users = ({usersArr, followingInProgress, followThunk}) => {
  return (
    <div>
      {   
        usersArr.map(item => 
          <User key={item.id} 
                item = {item} 
                followingInProgress = {followingInProgress} 
                followThunk = {followThunk}/>)
      }
    </div>
  );
}

export default Users;