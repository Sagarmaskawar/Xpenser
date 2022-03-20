import React from 'react';
import './addform.css';
import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { category } from '../constant/addexpense';
import { addExpense } from '../../redux/actions/expense';
import { toast,ToastContainer } from 'react-toastify';
import Successmodal from '../successmodal/Successmodal';
const Addform = () => {
    const[title,setTitle]=useState('');
     const[amount,setAmount]=useState('');
    const[categoryi,setCategoryi]=useState('');
    const[catopen,setCatopen]=useState(false);
    const[modalOpen,setModalOpen]=useState(false);
    const categories= category;
    const dispatch=useDispatch();
    const onTitle=(e)=>{
         setTitle(e.target.value);
    }
    const onAmount=(e)=>{
        let val=parseFloat(e.target.value);
        if(isNaN(val)){
            setAmount("");
            return;
        }
        setAmount(val);
    }
    const handleCat=(cat)=>{
        setCategoryi(cat);
          setCatopen(false);
    }
    const handleSubmit=()=>{
        if(title ===""||amount===""||!categoryi){
            const notify = () => toast("Please add valid data!");
            notify();
            return;
        }
      const data={
          title,
          amount,
          categoryi,
          createdAt:new Date(),
      };
        dispatch(addExpense(data));
        setModalOpen(true)
    }
   
  return (
    <div className='add-form'>
        <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
     <Successmodal modalOpen={modalOpen} setModalOpen={setModalOpen}/>

        <div className='form-item'>
         <label>Title: </label>
         <input type="text" placeholder='Name your Expense' value={title} onChange={(e)=>onTitle(e)}/>
        </div>
        <div className='form-item'>
            <label>Amount ₹: </label>
            <input type="number"className='amount-input' value={amount} onChange={(e)=>onAmount(e)} placeholder="Enter Amount"/>
            </div>
        

         <div className='head-category' >
             <div className='cat'>
              <div className='cat-dropdown' onClick={()=>setCatopen(!catopen)}>
                   <label>{categoryi? categoryi.title: "Cateogry"}</label>
                   <i class="fa-solid fa-angle-down"></i>
              </div>
              {
                  catopen&&<div className='cat-container'>
                        {
                            categories.map((cat)=>(
                               <div className='category-item' style={{
                                   borderRight:`5px solid ${cat.color}`
                               }} key={cat.id} onClick={()=>handleCat(cat)}>
                                   <label>{cat.title}</label>
                                   <img src={cat.icon}/>
                               </div>
                         ))
                        }

                  </div>
              }
             </div>
         </div>
         <div className='add-form-button'>
            <div onClick={()=>handleSubmit()}>
                <label>ADD</label>
                <i class="fa-solid fa-paper-plane"></i>
            </div>
            </div>
      
       
    </div>
  )
}

export default Addform