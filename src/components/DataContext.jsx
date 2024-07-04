import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    axios.get('http://localhost:5001/cards')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    // Fetch initial data from the backend
    fetchCards();

    // Optionally, set an interval to re-fetch data periodically
    const interval = setInterval(fetchCards, 60000); // every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const addCard = (newCard) => {
    axios.post('http://localhost:5001/cards', newCard)
      .then(response => setCards(prevCards => [...prevCards, response.data]))
      .catch(error => console.error('Error adding card:', error));
  };

  const deleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/cards/${id}`, {
        headers: { 'x-api-key': 'a9b066f6-fba2-4bb5-b587-a611ecf04f32' }
      });
      fetchCards();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <DataContext.Provider value={{ cards, addCard, deleteCard }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);








// Without Nodejs
// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [cards, setCards] = useState(() => {
//     const savedCards = localStorage.getItem('cards');
//     return savedCards ? JSON.parse(savedCards) : initialData;
//   });

//   useEffect(() => {
//     localStorage.setItem('cards', JSON.stringify(cards));
//   }, [cards]);

//   return (
//     <DataContext.Provider value={{ cards, setCards }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
