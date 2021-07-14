import React, { useState } from 'react';
import icon from '../../Users/user.png';
import { Image, Button, Modal, Form } from 'react-bootstrap';
import s from './Profile.module.css';
import styles from './FormStatus.module.css';
import { CSSTransition } from 'react-transition-group';


const ImageProfile = (props) => {
  let [inProp, setInProp] = useState(false);
  const [fileName, setFileName] = useState("Upload Boundary File");
  
  const handleSubmit = () => {
    console.log("SEND FILE");
  }

  return(
    <div className={s.imgBox}>
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
            centered
            >
            <Modal.Header closeButton>
              <Modal.Title>
                Сhoose a new image
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group controlId="inputGileImage">
              <Form.File
                type="file"
                className="custom-file-label"
                id="inputGroupFile01"
                label={fileName}
                onChange={(e) => setFileName(e.target.files[0].name)}
                custom
              />
            </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className={styles.Button + " pull-right"} 
                      onClick={handleSubmit}> Save image </Button>
            </Modal.Footer>
        </Modal>
      </CSSTransition>
      <Image className={s.img + " rounded mx-auto d-block"} 
              src={(props.userProfile.photos.small == null)? icon: props.userProfile.photos.small} roundedCircle />
      <div className={s.changePhoto} onClick={() => setInProp(true)}>Change photo</div>
    </div>
  )
  
}
export default ImageProfile;