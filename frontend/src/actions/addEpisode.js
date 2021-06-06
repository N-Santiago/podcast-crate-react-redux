export const addEpisode = (newEpisodeData, podcastId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/podcasts/${podcastId}/episodes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({episode: newEpisodeData})
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.statusText);
            }
        })
        .then((podcast) => { dispatch({ type: "CREATE_EPISODE", payload: podcast });
        })
        .catch((err) => dispatch({ type: "ERROR", payload: "" }));
    }
}