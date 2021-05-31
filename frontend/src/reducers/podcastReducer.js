


export default function podcasts(state = [], action) {
    switch (action.type) {
        case 'FETCH_PODCASTS':
            return action.payload;
        case "CREATE_PODCAST":
            return [...state, action.payload];
        default:
            return state;
    }
}

