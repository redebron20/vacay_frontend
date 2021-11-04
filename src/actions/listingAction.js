export const fetchListings = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/listings').then(response => {
            return response.json()
        }).then(listings => {
            dispatch({ type: 'FETCH_LISTINGS', payload: listings })
        })
    }
}
