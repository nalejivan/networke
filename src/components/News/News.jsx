import React from 'react';
import s from './News.module.css';
import NewsForm from './NewsForm';

const News = (props) => {
  const res = e => {
    props.setNewsThunk(e.news)
  }
  return(
    <div>
      <div className={s.form}>
      <NewsForm onSubmit={res}/>
      </div>
      <div className={s.news}>
        {props.item}
      </div>
    </div>
  )
}
export default News;