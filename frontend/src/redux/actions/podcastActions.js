export const getPodcast = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/podcasts")
            .then((res) => res.json())
            .then((data) => 
                dispatch({ type: "FETCH_PODCAST_SUCCESS", payload: data })
            ); 
    }
} 

export const createPodcast = newPodcastData => {
    return (dispatch) => {
        fetch("http://localhost:3000/podcasts", {
            method: "POST",
            headers: {
                Accepts: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ podcast: newPodcastData }) 
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'CREATE_PODCAST_SUCCESS', payload: data}))
    }
}