import { getToken } from './auth'

export const addPodcast = (podcast, history) => {
    return (dispatch) => {
        fetch('http://localhost:3000/podcasts', {
            method: 'POST',
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
            dispatch({ type: "CREATE_PODCAST", payload: data });
            history.push("/podcasts");
          })
          .catch((err) => dispatch({ type: "ERROR", payload: "" }));
      };
};
    