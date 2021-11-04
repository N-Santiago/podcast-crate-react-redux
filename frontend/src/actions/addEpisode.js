import { getToken } from './auth'

export const addEpisode = (episode, podcastId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/podcasts/${podcastId}/episodes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: getToken()
            },
            body: JSON.stringify({episode})
        })
        .then(res => res.json())
        .then((podcast) => {
            debugger 
            dispatch({ type: "CREATE_EPISODE", payload: podcast })
            history.push(`/podcasts/${podcastId}`)
        })
        .catch((err) => dispatch({ type: "ERROR", payload: "" }))
    }
}