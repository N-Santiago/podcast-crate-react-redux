export const addEpisode = (episode, podcastId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/podcasts/${podcastId}/episodes`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: episode
        })
        .then(res => res.json())
        .then((podcast) => {
            dispatch({ type: "CREATE_EPISODE", payload: podcast })
            history.push(`/podcasts/${podcastId}`)
        })
        .catch((err) => dispatch({ type: "ERROR", payload: "" }))
    }
}