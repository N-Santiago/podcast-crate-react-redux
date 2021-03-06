

export const editPodcast = (podcast, podcastId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/podcasts/${podcastId}`, {
            method: 'PATCH',
            headers: {
            },
            body: podcast
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.statusText);
            }
          })
          .then((data) => {
            dispatch({ type: "UPDATE_PODCAST", payload: data });
            history.push(`/podcasts/${podcastId}`);
          })
          .catch((err) => dispatch({ type: "ERROR", payload: "" }));
      };
};