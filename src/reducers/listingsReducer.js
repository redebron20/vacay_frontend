export const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.payload
        default:
            return state;
    }
}