import React from 'react';
import Cards from './Cards';

function Allcards({ data = [] }) {

  
  function createCard(item) {
    return (
      <Cards
        key={item.id}
        title={item.title}
        desc={item.description}
      />
    );
  }

  return (
    <>
      <div className="containerbox">
        {data.map(createCard)}
      </div>
    </>
  );
}

export default Allcards;

