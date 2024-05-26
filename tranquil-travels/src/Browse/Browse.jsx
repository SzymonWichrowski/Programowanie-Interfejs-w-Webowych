import HotelCards from '../Card/HotelCards.jsx'


function Browse() {

    return(
        <section className="browse-section">
            <input className="searchbar" placeholder="Search by hotel name, place, description etc."></input>
            <HotelCards></HotelCards>
        </section>
    );

    
}

export default Browse