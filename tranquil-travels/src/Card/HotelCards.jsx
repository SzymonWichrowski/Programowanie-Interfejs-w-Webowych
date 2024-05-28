import React from 'react';
import Card from './Card.jsx'
import hotels from '../Data/hotelsData.js';

function HotelCards() {

    return(
        <div className='grid'>
            <Card 
            id={hotels[0].id}
            hotel={hotels[0].hotel}
            city={hotels[0].city}
            rating={hotels[0].rating}
            price={hotels[0].price}
            description={hotels[0].summary}
            ></Card>
            <Card 
            id={hotels[1].id}
            hotel={hotels[1].hotel}
            city={hotels[1].city}
            rating={hotels[1].rating}
            price={hotels[1].price}
            description={hotels[1].summary}
            ></Card>
            <Card 
            id={hotels[2].id}
            hotel={hotels[2].hotel}
            city={hotels[2].city}
            rating={hotels[2].rating}
            price={hotels[2].price}
            description={hotels[2].summary}
            ></Card>
            <Card 
            id={hotels[3].id}
            hotel={hotels[3].hotel}
            city={hotels[3].city}
            rating={hotels[3].rating}
            price={hotels[3].price}
            description={hotels[3].summary}
            ></Card>
        </div>
    );

}

export default HotelCards