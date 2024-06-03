import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelProvider from './Data/HotelProvider.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Title from './Title/Title.jsx'
import Browse from './Browse/Browse.jsx'
import HotelPage from './HotelPage/HotelPage.jsx';
import AddOffersPage from './AddOffers/AddOffersPage.jsx';
import HomePage from './HomePage/HomePage.jsx';
import LoginModal from './LoginModal/LoginModal.jsx';
import { AuthContextProvider } from './Context/AuthContext';
import Protected from './Protected/Protected.jsx';
import SignupPage from './Signup/SignupPage.jsx';

function App() {

  return(
    <>
      <AuthContextProvider>
        <HotelProvider>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" 
                element={
                  <>
                    <Title title="My offers"></Title>
                    <Browse></Browse>
                    <LoginModal></LoginModal>
                  </>
                } 
              />
              <Route path="/hotel/:id" element={<HotelPage />} />
              <Route path='/add-offers' element={<AddOffersPage />} />
              <Route path='/home' element={<Protected> <HomePage /></Protected>}></Route>
              <Route path='/signup' element={<SignupPage />}></Route>
            </Routes>
          </Router>
        </HotelProvider>
      </AuthContextProvider>
    </>
  );
  
}

export default App
