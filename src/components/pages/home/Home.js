import React from 'react'
import Expenselist from '../../expenselist/Expenselist';
import Topfold from '../topfold/Topfold'
import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <Topfold/>
        <Expenselist/>
    </div>
  ) 
}

export default Home