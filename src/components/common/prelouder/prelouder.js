import React from 'react';
import Loading from './loading.gif';
import l from './loading.module.css'

const Prelouder = (props) => {
    return (props.isFetching)? <img className={l.loading} alt='preload' src={Loading}/>: null;
}
export default Prelouder;