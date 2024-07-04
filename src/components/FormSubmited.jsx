import React from 'react'
import { MdOutlineDone } from "react-icons/md";

function FormSubmited() {
  return (
    <>
      <div className='success-form-div'>
      <MdOutlineDone className='success-icon' />
      <h3 className='incomplete-form-h3'>Success!</h3>
        <p className='complete-form-paragraph'> Thank you for your input. </p>
        <p className='discretion' >Please note that your contribution can be removed or edited based on admin's discretion.</p>
    
            <button className='complete-form-hombtn'><a className='complete-form-home-link' href="/">OK</a></button>
      </div>
    </>
  )
}

export default FormSubmited
