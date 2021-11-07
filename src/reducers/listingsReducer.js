export const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.payload
        case 'ADD_LISTING':
            return state.concat(action.payload)
        case 'FETCH_LISTING':
            return Object.assign({}, state,
                {[action.listing.listing.id]: action.listing.listing});
        default:
        return state;
    }
}