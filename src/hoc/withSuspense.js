import React, { Suspense }  from 'react';
import Prelouder from '../components/common/prelouder/prelouder';

let withSuspense = (Component) => {
  return (props) => {
    return <Suspense fallback = {<Prelouder isFetching={true}/>}>
      <Component {...props}/>
    </Suspense>
  }
}
export default withSuspense;