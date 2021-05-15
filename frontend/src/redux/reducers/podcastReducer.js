export default(state = [], action) => {
    switch (action.type) {
        case "FETCH_PODCAST_SUCCESS":
            return action.payload;
        case "CREATE_PODCAST_SUCCESS":
            return [...state, action.payload];    
        default: 
            return state;
    }
}