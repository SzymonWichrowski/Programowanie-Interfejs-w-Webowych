import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {

    const navigate = useNavigate();

    const handleViewOffer = () => {
        navigate(`/hotel/${props.id}`);
      }

    return(
        <article className="hotel-card">
            <div className="card-image">
                <p className="chip">{props.city}</p>
            </div>
            <p className="text-large">{props.hotel}</p>
            <p className="text-small">{props.description}</p>
            <div className="hotel-card-info">
                <p className="text-large">{props.rating}</p>
                <p className="text-large">{props.price}</p>
            </div>
            <div className="hotel-card-buttons">
                <button className="button primary" onClick={handleViewOffer}> View offer <img src="/Arrow.svg"></img></button>
                <button className="button primary"> Edit <img src="/Pencil.svg"></img></button>
            </div>
        </article>
    );
}

Card.defaultProps = {
    id: 0,
    city: "City",
    hotel: "Hotel",
    description: "description",
    rating: "stars",
    price: "money/night",
}

export default Card