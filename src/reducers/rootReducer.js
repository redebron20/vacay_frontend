
import { combineReducers } from 'redux'
import { listingsReducer } from './listingsReducer'

export const rootReducer = combineReducers({
    listings: listingsReducer
})
