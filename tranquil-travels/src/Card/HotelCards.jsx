import React, {useContext} from 'react';
import Card from './Card.jsx'
import { HotelContext } from '../Data/HotelProvider.jsx';

function HotelCards() {

    const {hotels} = useContext(HotelContext);

    return(
        <div className='grid' id="hotel-cards">
            {hotels.map((hotel) => (
                <Card
                    key = {hotel.id}
                    id = {hotel.id}
                    hotel = {hotel.hotel}
                    city = {hotel.city}
                    rating = {hotel.rating}
                    price = {hotel.price}
                    description = {hotel.summary}
                >   
                </Card>
            ))}
        </div>
    );
}

export default HotelCards