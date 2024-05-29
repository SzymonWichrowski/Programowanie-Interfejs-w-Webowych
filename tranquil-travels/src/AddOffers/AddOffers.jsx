function AddOffers() {

    return(
        <section className="add-section">
            <form className="add-form">
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