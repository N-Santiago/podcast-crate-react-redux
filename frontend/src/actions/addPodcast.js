export const addPodcast = (newPodcastData, history) => {
    return (dispatch) => {
        fetch('http://localhost:3000/podcasts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({podcast: newPodcastData})
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.statusText);
            }
          })
          .then((data) => {
            dispatch({ type: "CREATE_PODCAST", payload: data });
            history.push("/podcasts");
          })
          .catch((err) => dispatch({ type: "ERROR", payload: "" }));
      };
};
    