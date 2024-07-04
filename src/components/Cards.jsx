import React, { useState } from 'react';
import { GiCancel } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const styles = {
  Box: {
    width: '70%',
    height: '60%',
    borderRadius: '6px',
    border: '2px solid #f4f1f1',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    padding: '0',
    animation: 'fade-up 0.5s',
    transition: 'all 0.5s ease-in-out',
  },
  meaning: {
    textAlign: 'center',
    height: '80%',
    width: 'auto',
    padding: '40px',
    margin: '0px',
    borderRadius: '6px',
    backgroundColor: '#1d2921',
    color: '#fff',
    boxSizing: 'border-box',
    transition: 'all 0.5s ease-in-out',
    webkitLineClamp: 'unset'
  },
  title: {
    borderBottom: '1px solid #f4f1f1',
    height: '20%',
    width: '100%',
    padding: '12px 20px',
    margin: '0px',
    boxShadow: '0px 0px 2px #f4f1f1',
    textAlign: 'center',
    borderRadius: '6px',
    backgroundColor: '#81b64c',
    color: '#fff',
    textWrap: 'wrap',
    transition: 'all 0.5s ease-in-out',
  },
  cancel: {
    display: 'initial'
  },
  Overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    zIndex: '9998',
  },
};

function Card(props) {
  const navigate = useNavigate();
  const Gohome = () => {
    navigate('/');
  };

  const [isModified, setIsModified] = useState(false);

  const handleClick = () => {
    setIsModified(!isModified);
  };

  return (
    <>
      {isModified && <div style={styles.Overlay} onClick={handleClick}></div>}
      <div
        className={`box ${isModified ? 'modified' : ''}`}
        style={isModified ? styles.Box : {}}
        onClick={handleClick}
      >
        <GiCancel onClick={Gohome} id='cancel' className='cancel' style={isModified ? styles.cancel : {}} />
        <h1 className="title" style={isModified ? styles.title : {}}>{props.title}</h1>
        <p className="meaning" style={isModified ? styles.meaning : {}}>{props.desc}</p>
      </div>
    </>
  );
}

export default Card;
