// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './components/DataContext';
import Home from './components/Home';
import AddFormPage from './components/AddformPage';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-new" element={<AddFormPage />} /> {/* Add new route */}
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;


// to do
// -activate search, done. Activate add new, . cut the length of meanings to fit , done. cut size of text to fit heading, done. make thebox siz grow bigger to fit all content, on click, done.