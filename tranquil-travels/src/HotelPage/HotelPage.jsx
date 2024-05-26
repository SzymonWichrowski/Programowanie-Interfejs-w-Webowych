import Navbar from "../Navbar/Navbar.jsx";
import Title from "../Title/Title.jsx";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function HotelPage() {

    const {id} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <Navbar></Navbar>
            <Title title="Hotel Name"></Title>
            <section className="hotel-page-section grid">
            <div className="hotel-image-large"></div>
            <div className="hotel-page-details">
                <div className="hotel-page-info">
                    <p className="text-small"><span className="bold">Location:</span> Madrid</p>
                    <p className="text-small"><span className="bold">Local category:</span> ★★★★★</p>
                    <p className="text-small"><span className="bold">Price:</span> 70€/room/night</p>
                    <p className="text-small"><span className="bold">Description:</span> </p>
                </div>
                <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo ligula. Etiam fermentum est in euismod egestas. Curabitur at condimentum ligula. Phasellus nunc velit, facilisis fermentum congue ac, cursus at leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec sapien vitae neque scelerisque tempus. Vestibulum hendrerit tellus ut pulvinar feugiat. Nullam iaculis vitae justo sit amet tempus. Nam nunc nunc, porttitor sed turpis quis, feugiat egestas leo. Phasellus consequat magna ante, ac aliquam felis convallis sit amet. Sed massa lorem, iaculis ac vestibulum ac, tempus a tortor. Ut posuere ipsum nec condimentum vehicula. Curabitur orci velit, aliquam vel arcu quis, semper congue ligula.</p>
                <div className="hotel-page-buttons">
                    <button className="button primary">Edit <img src="/Pencil.svg"></img></button>
                    <button className="button primary">Remove <img src="/trash.svg"></img></button>
                </div>
                <div className="hotel-page-images">
                    <div className="card-image"></div>
                    <div className="card-image"></div>
                </div>
            </div>
            </section>
        
        </>
    );
}

export default HotelPage