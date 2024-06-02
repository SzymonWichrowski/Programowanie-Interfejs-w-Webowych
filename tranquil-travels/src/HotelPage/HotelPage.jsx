import Navbar from "../Navbar/Navbar.jsx";
import Title from "../Title/Title.jsx";
import EditModal from "../EditModal/EditModal.jsx";
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {openModal} from '../scripts/modals.js'
import { HotelContext } from "../Data/HotelProvider.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

function HotelPage() {

    const { id } = useParams();
    const {hotels, updateHotel} = useContext(HotelContext);
    const [hotel, setHotel] = useState(hotels.find(hotel => hotel.id === id));

    function handleHotelEdit(updatedHotel) {

        setHotel(updatedHotel);
        updateHotel(updatedHotel);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!hotel) {
        return <p>Nie znaleziono hotelu!</p>;
    }

    return(
        <>
            <Navbar></Navbar>
            <Title title={hotel.hotel}></Title>
            <section className="hotel-page-section grid">
            <div className="hotel-image-large-container"><img src={hotel.image} alt="hotel image" className="hotel-image-large"/></div>
            <div className="hotel-page-details">
                <div className="hotel-page-info">
                    <p className="text-small"><span className="bold">Location:</span> {hotel.city}</p>
                    <p className="text-small"><span className="bold">Local category:</span> {hotel.rating}</p>
                    <p className="text-small"><span className="bold">Price:</span> {hotel.price}</p>
                    <p className="text-small"><span className="bold">Description:</span> </p>
                </div>
                <p className="text-small">{hotel.description}</p>
                <div className="hotel-page-buttons">
                    <button className="button primary" onClick={() => openModal('edit-modal')}>Edit <img src="/Pencil.svg"></img></button>
                    <button className="button primary">Remove <img src="/trash.svg"></img></button>
                </div>
                <div className="hotel-page-images">
                    <div className=".hotel-page-image-container"><img src={hotel.image} alt="hotel image" className="hotel-page-image"/></div>
                    <div className=".hotel-page-image-container"><img src={hotel.image} alt="hotel image" className="hotel-page-image"/></div>
                </div>
            </div>
            </section>
            <EditModal hotel={hotel} handleHotelEdit={handleHotelEdit}></EditModal>
            <LoginModal></LoginModal>
        </>
    );
}

export default HotelPage