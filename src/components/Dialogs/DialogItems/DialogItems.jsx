import React from 'react';
import s from './DialogItems.module.css';
import img from './user.png'

const DialogItems = (props) => {
  return(
    props.dialogs.map((item, i) => 
      <div className={s.dialog} key={i + 'user'}>
          <img src={img} alt="User"/>
          <div className={s.user} >{item.user}</div>
      </div>
    )    
  )
}
export default DialogItems;