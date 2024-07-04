import React from 'react';
import { useNavigate } from 'react-router-dom';

function Addnew() {
  const navigate = useNavigate();

  const openForm = () => {
    navigate('/add-new'); // Navigate to the new route
  };

  return (
    <>
      <button id="AddnewBtn" onClick={openForm}>Add New</button>
    </>
  );
}

export default Addnew;
