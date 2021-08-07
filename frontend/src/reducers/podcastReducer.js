export default function podcasts(state = [], action) {
    switch (action.type) {
        case 'FETCH_PODCASTS':
            return [...action.payload];
        case "CREATE_PODCAST":
            return [...state, action.payload];
        case "UPDATE_PODCAST":
            const index = state.findIndex(podcast => action.payload.podcast_id === podcast.id)
            return [
                ...state.slice(0, index),
                [...state, action.payload],
                ...state.slice(index + 1)
            ]    
        case "CREATE_EPISODE":
            return [
                ...state.slice(0, index), 
                {...state[index], episodes: [...state[index].episodes, action.payload]},
                ...state.slice(index + 1)
            ]
        default:
            return state;

    }
}


