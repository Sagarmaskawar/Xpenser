import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './successmodal.css'

const Successmodal = ({modalOpen, setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#71ccca',
          borderRadius:'12px',
        },
      };
      console.log(modalOpen);
  return (
    <Modal isOpen={modalOpen} style={customStyles}
     ariaHideApp={false}
    >
        <div className='success'>
        <label>Expense Added Successfully.</label>
        <img src={require('../assets/success.png')} alt="Expense Image" className='suimage'/>
        <Link to='/'>
        <div className='add-home-btn'>
           
        <i class="fa-solid fa-house-user"></i>
            Home           
        </div>
        </Link>
        
        </div>
    </Modal>
  )
}

export default Successmodal