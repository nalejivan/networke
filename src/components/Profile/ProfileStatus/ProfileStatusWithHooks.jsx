import React, { useState, useEffect } from 'react';
import StatusForm from './StatusForm';
import { Alert } from 'react-bootstrap';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(()=>{
    setStatus(props.status);
  }, [props.status])

  const activeeditMode = () => props.editStatus? setEditMode(true) : null;

  const deactiveeditMode = () => props.editStatus? setEditMode(false) : null;
  
  const handleSubmit = e => {
    props.putStatus(e.status);
    deactiveeditMode();
  }
  return(
    <div>
      {editMode &&
        <StatusForm 
          onSubmit={handleSubmit}
          onBlur={deactiveeditMode}
          autoFocus={true}
          onMouseOut={deactiveeditMode}
          initialValues={{status: status}}
        />
      }
      {
      !editMode &&
        <Alert variant={'warning'} onDoubleClick={activeeditMode}>
            status: {status !== null? status : 'status it empty'}  
        </Alert>
      } 
    </div>
  )
}

export default ProfileStatusWithHooks;