// Home.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Allcards from './Allcards';
import { useData } from './DataContext';
import Addnew from './Addnew';
import Footer from './Footer';

function Home() {
  const { cards } = useData();
  const [filteredData, setFilteredData] = useState(cards);
  const [currentPage, setCurrentPage] = useState(0);
  
  useEffect(() => {
    setFilteredData(cards);
  }, [cards]);

  useEffect(() => {
    setFilteredData(cards.slice(0, 15));
  }, [cards]);

  useEffect(() => {
    setFilteredData(cards.slice(currentPage * 15, (currentPage + 1) * 15));
  }, [currentPage, cards]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadPrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div className='Search-Add'><Search setList={setFilteredData} />
      <Addnew /></div>
      <Allcards data={filteredData} />
      <div className="pagination-buttons">
        {currentPage > 0 && <button className='previousBtn' onClick={loadPrevious}> Previous</button>}
        {(currentPage + 1) * 15 < cards.length && <button className= 'loadmoreBtn' onClick={loadMore}>Load More</button>}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
