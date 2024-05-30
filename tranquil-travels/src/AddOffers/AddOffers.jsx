import { useNavigate } from 'react-router-dom';
import hotelsData from '../Data/hotelsData.js';

function AddOffers({ addHotel }) {

    const navigate = useNavigate();

    const hotelCards = document.getElementById('hotel-cards');

    const handleAddOffer = (event) => {

        event.preventDefault();

        const name = document.getElementById('hotel-name').value;
        const location = document.getElementById('hotel-location').value;
        const price = document.getElementById('hotel-price').value;
        const rating = document.getElementById('hotel-category').value;
        const description = document.getElementById('hotel-description').value;

        // teraz tylko dodac dynamicznie komponent reactowy i to za pomoca formsa z innego widoku...

        navigate(`/`);

    }

    return(
        <section className="add-section">
            <form className="add-form" onSubmit={handleAddOffer}>
                <div className="add-form-columns">
                    <div className="add-form-details">
                        <div className="add-form-detail">
                            <label>Hotel name:</label>
                            <input id="hotel-name" className="add-input"></input>
                        </div>
                        <br></br>
                        <div className="add-form-detail">
                            <label>Location:</label>
                            <input id="hotel-location" className="add-input"></input>
                        </div>
                        <br></br>
                        <div className="add-form-detail">
                            <label>Price:</label>
                            <input id="hotel-price" className="add-input"></input>
                        </div>
                        <br></br>
                        <div className="add-form-detail">
                            <label>Local category:</label>
                            <input id="hotel-category" className="add-input"></input>
                        </div>
                    </div>
                    <div className="add-form-description">
                        <label>Description:</label>
                        <textarea id="hotel-description" className="add-input"></textarea>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="add-form-buttons">
                    <button type="reset" className="button secondary">Cancel</button>
                    <button type="submit" className="button secondary">Add offer</button>
                </div>
            </form>
        </section>
    );

}

export default AddOffers