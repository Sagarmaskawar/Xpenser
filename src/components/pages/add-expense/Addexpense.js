import React from 'react'
import Addform from '../../adddform/Addform';

import Topfold from '../topfold/Topfold'
import './addexpense.css';
const Addexpense = () => {
  return (
    <div className='add-expense'>
        <Topfold/>
        <Addform/>
    </div>
  )
}

export default Addexpense