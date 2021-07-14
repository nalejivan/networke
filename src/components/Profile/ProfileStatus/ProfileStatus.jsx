import React, { useState, useEffect } from 'react';
import StatusForm from './StatusForm';
import { Alert, Button, Modal  } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styles from './FormStatus.module.css';

const ProfileStatus = (props) => {

  let [inProp, setInProp] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(()=>{
    setStatus(props.status);
  }, [props.status])
  
  const handleSubmit = e => {
    props.putStatus(e.status);
    setInProp(false);
  }
  return(
    <div>
      <CSSTransition in={inProp} timeout={300} 
          unmountOnExit
          classNames={{
            enter: styles.MyClassEnter,
            enterActive: styles.MyClassEnterActive,
            exitActive: styles.MyClassExit,
            exitDone: styles.MyClassExitActive
          }}>
           <Modal 
            show={inProp} 
            onHide={() => setInProp(false)} 
            onClose={() => setInProp(false)}
            centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Enter new status
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <StatusForm onSubmit={handleSubmit}               
                          autoFocus={true}
                          initialValues={{status}}/>
            </Modal.Body>

            <Modal.Footer>
              <Button className={styles.Button + " pull-right"} 
                      onClick={handleSubmit}> Save </Button>
            </Modal.Footer>
        </Modal>
      </CSSTransition>
      <Alert variant={'warning'} onDoubleClick={() => setInProp(true)}>
          status: {status !== null? status : 'status it empty'}  
      </Alert>
    </div>
  )
}

export default ProfileStatus;