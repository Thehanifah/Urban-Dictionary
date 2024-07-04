// src/components/Addform.jsx
import React, { useState } from 'react';
import { GiCancel } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useData } from './DataContext';
import IncompleteFormPopup from './IncompleteFormPopup';
import WordExistsPopup from './WordExistsPopup';
import FormSubmited from './FormSubmited';
import AdminLink from './AdminLink';

function Addform() {
  const navigate = useNavigate();
  const Gohome = () => {
    navigate('/');
  };

  const { addCard, cards } = useData();

  const [Word, setWord] = useState('');
  const [Description, setDescription] = useState('');
  const [showIncompleteFormPopup, setShowIncompleteFormPopup] = useState(false);
  const [showWordExistsPopup, setShowWordExistsPopup] = useState(false);
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);
  
  

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const AddData = () => {
    if (!Word || !Description) {
      setShowIncompleteFormPopup(true);
      // alert('You have to complete the form');
      return;
    }

    if (cards.some(card => card.title === Word)) {
      setShowWordExistsPopup(true);
      // alert('Word already exists in dictionary');
      return;
    }

    const newCard = {
      title: Word,
      description: Description
    };

    if (newCard){
      setShowFormSubmitted(true)
    }

    addCard(newCard);

    setWord('');
    setDescription('');
  };


  const closeIncompleteFormPopup = () => {
    setShowIncompleteFormPopup(false);
  };

  const closeWordExistsPopup = () => {
    setShowWordExistsPopup(false);
  };

  const closeFormSubmitted =() => {
    setShowFormSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddData();
  
  };


  return (
    <>
    <div className='formContainer'>
      <GiCancel onClick={Gohome} id='cancel' />
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="Word">Word/Phrase</label>
        <textarea
          name="Word"
          id='Word'
          className='word'
          placeholder='Word'
          type= 'text'
          value={Word}
          onChange={handleWordChange}
        ></textarea>
        <label htmlFor="Description">Definition</label>
        <textarea
          name="description"
          id='Description'
          className='desc'
          type= 'text'
          placeholder='Type the meaning of the word/phrase here'
          value={Description}
          onChange={handleDescriptionChange}
        ></textarea>
        <div className='formbtns'>
          <button type='submit' id='SubmitBtn'>Submit</button>
        </div>
      </form>
    </div>
    {(showIncompleteFormPopup || showWordExistsPopup || showFormSubmitted) && <div className="overlay"></div>}
    {showIncompleteFormPopup && <IncompleteFormPopup onClose={closeIncompleteFormPopup} />}
    {showWordExistsPopup && <WordExistsPopup onClose={closeWordExistsPopup} />}
    {showFormSubmitted && <FormSubmited onClose={closeFormSubmitted} />}
    <AdminLink/>
    </>
  );
}

export default Addform;
