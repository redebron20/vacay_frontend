import React from 'react';
// import { BeatLoader } from 'react-spinners';

import Image from 'react-bootstrap/Image'

const ListingShow = ({ listings, match }) => {
    
    if (listings.length === 0) return null

    const listing = listings.find(listing => listing.id === parseInt(match.params.listingId)) 
    
    return (
        <div>
            <h2>{listing.title}</h2> 
            <Image style={{ width: '18rem' }} src={listing.img_url} alt={listing.title}/>
            <br/>
            
            <p>Description:{listing.description}</p>
            <p>Pets allowed: {listing.pets_allowed === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>Air Conditioning: {listing.air_conditioning === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>Kitchen: {listing.kitchen === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>WiFi: {listing.wifi === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>Number of Guests: {listing.guests}</p>

        </div>
    );
};

export default ListingShow;