import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
            ToDo-Xepenses <i class="fa-solid fa-credit-card"></i>
            </div>
             <div className='header-button'>
                 <a href='https://github.com/Sagarmaskawar' target='_blank'>
                 <i class="fa-brands fa-github"></i>Star
                 </a>
             </div>
            </div>
    </div>
  )
}

export default Header