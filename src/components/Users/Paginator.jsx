import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginator = ({pages, currentPage, onPageChanged}) => {
  return (
    <div>
      <Pagination>
        {
          pages.map((num, i) => 
          <Pagination.Item key={'page_' + i} active={num === currentPage}
            onClick={() => onPageChanged(num)}>{num} </Pagination.Item>)
        }
      </Pagination>
    </div>
  )
}
export default Paginator;
