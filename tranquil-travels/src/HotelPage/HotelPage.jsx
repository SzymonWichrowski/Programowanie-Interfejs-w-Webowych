import Navbar from "../Navbar/Navbar.jsx";
import Title from "../Title/Title.jsx";
import React from 'react';
import { useParams } from 'react-router-dom';

function HotelPage() {

    const {id} = useParams();

    return(
        <>
            <Navbar></Navbar>
            <Title title="Hotel Name"></Title>
        
        </>
    );
}

export default HotelPage