import { getToken } from './auth'

export const editPodcast = (podcast, podcastId, history) => {
  debugger 
    return (dispatch) => {
        fetch(`http://localhost:3000/podcasts/${podcastId}`, {
            method: 'PATCH',
            headers: {
              Authorization: getToken()
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
            debugger 
            dispatch({ type: "UPDATE_PODCAST", payload: data });
            history.push(`/podcasts/${podcastId}`);
          })
          .catch((err) => dispatch({ type: "ERROR", payload: "" }));
      };
};