import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchListings} from '../actions/listingsAction'
import ListingForm from './listing/listing_form'

class ListingsContainer extends Component {

    componentDidMount() {
        this.props.fetchListings()
    }
    
    render() {
        return (
            <div>
                Listings here:
                <ListingForm />
            </div>
        )
    }
}

export default connect(null, { fetchListings })(ListingsContainer);

