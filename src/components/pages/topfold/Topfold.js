import React from 'react'
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../../redux/actions/expense';
import './topfold.css';

const Topfold = () => {
    const[query,setQuery]=useState("");
    const dispatch=useDispatch();
    const onChan=(e)=>{
           setQuery(e.target.value);
           dispatch(searchExpense(e.target.value));
    }
  return (
    <div className='topfold'>
        {window.location.pathname ==='/'?<div className='fold'>
            <div className='searchbar'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search for expense' onChange={(e)=>onChan(e)}/>
            </div>
            <Link to='addexpense'>
            <div className='add-button'>
                <i class="fa-solid fa-circle-plus"></i>
                <label>Add</label>
            </div>
            </Link>
        </div>:
        (<div className='add-topfold'>
            <Link to='/'>
            <div className='backbut'>
               <i class="fa-solid fa-arrow-left"></i>
               <label>Back</label>
                   </div></Link>
               <Link to='/'>
               <div className='cancel'>
                   <i class="fa-solid fa-circle-xmark"></i>
               <label>Cancel</label>
                   </div>
               </Link>
                 

           </div>)}
    </div>
  )
}

export default Topfold