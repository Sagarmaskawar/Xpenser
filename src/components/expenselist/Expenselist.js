import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../cards/Cards'
import './expsenselist.css';
import { toast, ToastContainer } from 'react-toastify';
const Expenselist = () => {
   const {expenseList:list, query}=useSelector((state)=>state.expenses);
   const filteredList = list.filter((item) => item.title.includes(query));
   const notifySuccess=toast.success("Expense Deleted");
   console.log(filteredList);
  return (
    <div className='expense-item'>
      <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
               {filteredList.length ? (
        filteredList.map((item) => (
          <Cards item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="expense-img">
          <img
            src={require("../assets/folder.png")}
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )}
     </div>
  )
}

export default Expenselist