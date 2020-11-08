import React from 'react';
import img from './post.png';
import { Media } from 'react-bootstrap';

const Item = (props) => {
  return(
    [...props.news].reverse().map((item, i) => 
        <Media key={i}>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={img}
          alt="post"
        />
        <Media.Body>
          <h5>Post</h5>
          <p>
          {item.text}
          </p>
        </Media.Body>
      </Media>
  
    )
  )
}
export default Item;