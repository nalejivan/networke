import React from 'react';
import s from './Messages.module.css';


const Messages = (props) => {
  return(props.dialogs.map((item, i) => 
      <div className={s.message} key={i + 'message'}>
        <div>{item.user}</div>
        <div>{item.message}</div>
      </div>)
  );
}

export default Messages;