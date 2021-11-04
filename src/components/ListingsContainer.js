import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchListings} from '../actions/listingsAction'

class ListingsContainer extends Component {

    componentDidMount() {
        this.props.fetchListings()
    }
    
    render() {
        return (
            <div>
                Listings here:
            </div>
        )
    }
}

export default connect(null, { fetchListings })(ListingsContainer);

