import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import { delExpense } from '../../redux/actions/expense';
import'./cards.css'
const Cards = ({item, notifySuccess}) => {
  const time=moment(item.createdAt).fromNow();
  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(delExpense(item));
    notifySuccess();
  }
  return (
    <div className='card' style={{borderRight: `6px solid${item.categoryi.color}`}}> 

       <div className='card-comtainer'>
         <img src={item.categoryi.icon} alt={item.categoryi.title} className="card-image"/>
       </div>
       <div className='card-info'>
         <h4 className='card-title'>{item.title}</h4>
         <label className='card-time'>{time}</label>
       </div>
       <div className='card-right'>
         
       <div className='delete-icon'> 
       <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
       </div>
         <div><h5 className='item-amount'>₹ {item.amount}</h5></div>
        
       </div>
    </div>
  )
}

export default Cards