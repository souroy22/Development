import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllNews } from '../action-creator';
import NewsItem from './NewsItem';
import '../styles/News.css';


const News = () => {
     const dispatch = useDispatch();
     const {newsData} = useSelector(state => state.news);

     useEffect(() => {
          dispatch(getAllNews());
     }, [newsData]);

  return (
    <div className='new-container'>
     {newsData.map(data => (<NewsItem data={data} />))}
    </div>
  )
}

export default News;