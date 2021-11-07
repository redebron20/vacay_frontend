import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import ListingsContainer from './listing/listing_show_container'
import ListingShow from './listing/listing_show'


const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/listings' component={ListingsContainer} />
            <Route exact path="/listings/:listingId" component={ListingShow} />
        </Switch>
        
    );
};

export default Router;