import React from 'react';
import { NavLink } from 'react-router-dom'

import s from './Users.module.css';
import icon from './user.jpg';

const Users = (props) => {
  return (
    <div>
      <div>
        {
          props.pages.map((p, i) => <span 
            key={'page_' + i} 
            className={p === props.currentPage? s.currentPage: s.page} 
            onClick={() => props.onPageChanged(p)}>{p}</span>)
        }
      </div> 
      <div>
          {
            props.usersArr.map(item => 
              <div className={s.container} key={item.id}>
                <NavLink to={'/profile/' + item.id}>
                  <div className={s.id}>{item.id}</div>
                  <div className={s.name}>{item.name}</div>
                  <img className={s.img} alt='img' src={ 
                    (item.photos.small == null)? icon: item.photos.small
                  }/>
                </NavLink>
                <button disabled={props.followingInProgress.some(id => id === item.id)} className={s.bt} onClick={ 
                    () => {
                      let val = item.followed? false: true;
                      props.followThunk(item.id, val);
                    } 
                  }>{ item.followed? 'Unfollowed': 'Followed' }</button>    
              </div>
            )
          }
      </div> 
    </div>
  );
}

export default Users;