import React, {createContext, useState} from 'react';
import hotelsData from '../Data/hotelsData.js'

export const HotelContext = createContext();

function HotelProvider({ children }) {

    const [hotels, setHotels] = useState(hotelsData);

    const updateHotel = (updateHotel) => {
        setHotels((prevHotels) =>
            prevHotels.map((hotel) => (hotel.id === updateHotel.id ? updateHotel : hotel))
        );
    };

    return (
        <HotelContext.Provider value = {{hotels, updateHotel}}>
            {children}
        </HotelContext.Provider>
    );
}

export default HotelProvider