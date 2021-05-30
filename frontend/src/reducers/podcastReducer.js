


export default function podcasts(state = {}, action) {
    switch (action.type) {
        case 'FETCH_PODCASTS':
            return action.payload
        default:
            return state
            
    }

} 

