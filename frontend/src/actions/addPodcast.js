

export const addPodcast = (podcast, history) => {
    return (dispatch) => {
      console.log("c")
        fetch('http://localhost:3000/podcasts', {
            method: 'POST',
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
            console.log("d")
            dispatch({ type: "CREATE_PODCAST", payload: data });
            console.log("e")
            history.push("/podcasts");
          })
          .catch((err) => dispatch({ type: "ERROR", payload: "" }));
          console.log("f")
      };
};
    