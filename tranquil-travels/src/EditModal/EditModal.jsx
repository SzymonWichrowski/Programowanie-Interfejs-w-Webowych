import {closeModal} from '../scripts/modals.js'
import React, {useState} from 'react';

function EditModal({hotel, handleHotelEdit}) {

    const [name, setName] = useState(hotel.hotel);
    const [location, setLocation] = useState(hotel.city);
    const [rating, setRating] = useState(hotel.rating);
    const [price, setPrice] = useState(hotel.price);
    const [description, setDescription] = useState(hotel.description);

    function handleSubmit() {

        const updatedHotel = {
            ...hotel,
            hotel: name, 
            city: location, 
            rating: rating,
            price: price,
            description: description
        };

        handleHotelEdit(updatedHotel);
        closeModal('edit-modal'); 
    }

    return(
        <dialog className='modal' id="edit-modal">
            <div className="modal-heading">
                <p className="title-large">Edit</p>
                <img src="/Cross.svg" className='pointer' onClick={() => closeModal('edit-modal')}></img>
            </div>
            <p className="text-small modal-text">You're editing the {name} offer</p>
            <br></br>
            <div className="modal-forms">
                <div className="modal-form">
                    <label className="text-small">Hotel name:</label>
                    <input className='modal-input' id='hotel-name' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <br></br>
                <div className="modal-form">
                    <label className="text-small">Description:</label>
                    <textarea className='modal-input' id='hotel-description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <br></br>
                <div className="modal-mini-forms">
                    <div className="modal-form">
                        <label className="text-small">Location:</label>
                        <input className='modal-input modal-mini-input' id='hotel-location' value={location} onChange={(e) => setLocation(e.target.value)}></input>
                    </div>
                    <div className="modal-form">
                        <label className="text-small">Price:</label>
                        <input className='modal-input modal-mini-input' id='hotel-price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <div className="modal-form">
                        <label className="text-small">Local category:</label>
                        <input className='modal-input modal-mini-input' id='hotel-category' value={rating} onChange={(e) => setRating(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="modal-buttons">
                <button type='reset' className='button primary' onClick={() => closeModal('edit-modal')}>Cancel</button>
                <button type='submit' className='button primary' onClick={handleSubmit}>Edit</button>
            </div>
        </dialog>
    );

}

export default EditModal