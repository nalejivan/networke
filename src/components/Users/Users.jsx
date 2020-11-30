import React from 'react';
import { NavLink } from 'react-router-dom'
import { Button, Row, Col, Image, Pagination } from 'react-bootstrap';
import s from './Users.module.css';
import icon from './user.jpg';

const Users = (props) => {
  return (
    <div>
      <Pagination>
        {
          props.pages.map((p, i) => 
          <Pagination.Item key={'page_' + i} active={p === props.currentPage? true: false}
            onClick={() => props.onPageChanged(p)}>{p} </Pagination.Item>)
        }
      </Pagination>
      <div>
          {
            props.usersArr.map(item => 
              <div className={s.container + " text-center"} key={item.id}>
                  <Row>
                    <Col xs={2} md={2}>
                      <NavLink to={'/profile/' + item.id}>
                        <Image className={s.img + " mx-auto d-block"} src={(item.photos.small == null)? icon: item.photos.small} roundedCircle />
                        <div className={s.id}>{item.id}</div>
                        <div className={s.name}>{item.name}</div>
                      </NavLink>
                      <Button disabled={props.followingInProgress.some(id => id === item.id)} 
                        variant="success"
                        onClick={() => { props.followThunk(item.id, item.followed? false: true)}}>
                        { item.followed? 'Unfollowed': 'Followed' }
                      </Button>
                    </Col>
                  </Row>
              </div>
            )
          }
      </div> 
    </div>
  );
}

export default Users;