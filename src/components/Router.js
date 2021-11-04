import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import Listing from './Listing'


const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/listing' component={Listing} />
        </Switch>
        
    );
};

export default Router;