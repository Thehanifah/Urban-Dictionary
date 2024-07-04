import React from 'react'
import { MdCancel } from "react-icons/md";


function IncompleteFormPopup({ onClose }) {

 

  return (
    <>
      <div className='complete-form-div'>
      <MdCancel className='error-warning' />
        <h3 className='incomplete-form-h3'>Oops!</h3>
        <p className='incomplete-form-paragraph'> Sorry, you have to complete the form to submit!</p>
        <div className='Complete-formbtn-container'>
            <button className='incomplete-form-hombtn'><a className='incomplete-form-home-link' href="/">Go home</a></button>
            <button className='incomplete-form-continue-btn'onClick={onClose}>Continue</button>
        </div>
      </div>
    </>
  )
}

export default IncompleteFormPopup


