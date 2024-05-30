import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelProvider from './Data/HotelProvider.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Title from './Title/Title.jsx'
import Browse from './Browse/Browse.jsx'
import HotelPage from './HotelPage/HotelPage.jsx';
import AddOffersPage from './AddOffers/AddOffersPage.jsx';

function App() {

  return(
    <>
    <HotelProvider>
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
          <Route path='/add-offers' element={<AddOffersPage/>} />
        </Routes>
      </Router>
    </HotelProvider>

      
    </>
  );
  
}

export default App
