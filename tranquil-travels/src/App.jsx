import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx'
import Title from './Title/Title.jsx'
import Browse from './Browse/Browse.jsx'
import HotelPage from './HotelPage/HotelPage.jsx';

function App() {

  return(
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" 
            element={
              <>
                <Title title="My offers"></Title>
                <Browse></Browse>
              </>
            } 
          />
          <Route path="/hotel/:id" element={<HotelPage />} />
        </Routes>
      </Router>
    </>
  );
  
}

export default App
