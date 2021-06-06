export default function podcasts(state = [], action) {
    switch (action.type) {
        case 'FETCH_PODCASTS':
            return action.payload;
        case "CREATE_PODCAST":
            return [...state, action.payload];
        case "CREATE_EPISODE":
            let podcasts = state.podcasts.map(podcast => {
                if (podcast.id === action.payload.id) {
                    return action.payload
                } else {
                    return podcast
                }
            })
            return {...state, podcasts: podcasts}
        default:
            return state;

    }
}


