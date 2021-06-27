import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

// const Paginator = ({pages, currentPage, onPageChanged}) => {
//   return (
//     <div>
//       <Pagination>
//         {
//           pages.map((num, i) => 
//           <Pagination.Item key={'page_' + i} active={num === currentPage}
//             onClick={() => onPageChanged(num)}>{num} </Pagination.Item>)

            
//         }
//         <Pagination.Item key={'page_next'} active={false}
//             onClick={() => onPageChanged('next')}>Next</Pagination.Item>
//       </Pagination>
//     </div>
//   )
// }
// export default Paginator;
const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i+1);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize; 


    return (
      <div>
        
        <Pagination>
          {portionNumber > 1 && <Pagination.Item key={'page_prev'} 
              onClick={() => setPortionNumber(portionNumber - 1)}>Prev</Pagination.Item> }
          {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((num, i) => 
              <Pagination.Item key={'page_' + i} active={num === currentPage}
                onClick={() => onPageChanged(num)}>{num} </Pagination.Item>)   
          }
          {portionCount > portionNumber && <Pagination.Item key={'page_prev'} 
              onClick={() => setPortionNumber(portionNumber + 1)}>Next</Pagination.Item>}
        </Pagination>
        
      </div>
    )
  }
  export default Paginator;