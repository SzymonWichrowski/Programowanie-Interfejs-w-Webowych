import React from 'react';
import Card from './Card.jsx'

function HotelCards() {

    return(
        <div className='grid'>
            <Card city="Florence" hotel="Harmony Hideaway Hotel" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec." 
            rating="★★★★★" price="100€/room" ></Card>
            <Card city="Madrid" hotel="Serene Retreat"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
            rating="★★★★★" price="70€/room"
            ></Card>
            <Card city="Sintra" hotel="Palm Springs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
            rating="★★★★★" price="65€/room"
            ></Card>
            <Card city="Sienna" hotel="Oasis Resort"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec."
            rating="★★★★★" price="115€/room"
            ></Card>
        </div>
    );

}

export default HotelCards