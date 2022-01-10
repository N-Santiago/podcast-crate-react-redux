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
                action.payload,
                ...state.slice(index + 1)
            ]    
        case "CREATE_EPISODE":
            const episodeIndex = state.findIndex(podcast => action.payload.podcast_id === podcast.id)
            return [
                ...state.slice(0, episodeIndex), 
                {...state[episodeIndex], episodes: [...state[episodeIndex].episodes, action.payload]},
                ...state.slice(episodeIndex + 1)
            ]
        default:
            return state;

    }
}


