import React from 'react';

import { setNewsThunk } from '../../redux/reducers/news_reducer';
import Item from './Item/Item';
import News from './News';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    item: <Item news={state.news.arr}/>
  }
}

const  NewsContainer = connect(mapStateToProps, { setNewsThunk })(News)
export default NewsContainer;