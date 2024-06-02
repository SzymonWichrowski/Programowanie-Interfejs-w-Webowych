import LoginModal from "../LoginModal/LoginModal.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Title from "../Title/Title.jsx";
import AddOffers from "./AddOffers.jsx";
import React from 'react';
import { useEffect } from 'react';

function AddOffersPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <Navbar></Navbar>
            <Title title='Add new offers'></Title>
            <AddOffers></AddOffers>
            <LoginModal></LoginModal>
        </>

        
    );
}

export default AddOffersPage