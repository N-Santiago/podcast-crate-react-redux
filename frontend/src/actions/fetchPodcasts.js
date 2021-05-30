


export function fetchPodcasts() {
    return (dispatch) => {
        fetch('http://localhost:3000/podcasts')
        .then(resp => resp.json())
        .then(podcasts => dispatch({
            type: 'FETCH_PODCASTS',
            payload: podcasts
        }))
    } 
}