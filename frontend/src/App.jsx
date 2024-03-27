


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


import ShowBook from './pages/ShowBook';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/books/create' element={<CreateBook />} /> */}
        <Route path='/books/details/:id' element={<ShowBook />} />
       
      </Routes>
    </Router>
  );
}

export default App;


