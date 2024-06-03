import React, {createContext, useState, useEffect} from 'react';
import { db } from '../init.js'; 
import { collection, getDocs } from 'firebase/firestore';

export const HotelContext = createContext();

function HotelProvider({ children }) {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const hotelsCollection = collection(db, 'hotelsData');
                const querySnapshot = await getDocs(hotelsCollection);
                const hotelsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setHotels(hotelsList);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

    const updateHotel = (updateHotel) => {
        setHotels((prevHotels) =>
            prevHotels.map((hotel) => (hotel.id === updateHotel.id ? updateHotel : hotel))
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error loading hotels: {error.message}</div>;
    }

    return (
        <HotelContext.Provider value = {{hotels, updateHotel}}>
            {children}
        </HotelContext.Provider>
    );
}

export default HotelProvider