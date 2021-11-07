import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import ListingShow from './listing_show'
import Listings from './listings'

class ListingsContainer extends Component {

    render() {
        const {listings} = this.props 

        return (

            <div>
                <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} listings={listings}/>} />
                <Route exact path="/listings" render={() =>  
                    <Listings listings={listings}/>} 
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      listings: state.listings
    }
}

export default connect(mapStateToProps)(ListingsContainer);

