

export const addPodcast = (podcast, history) => {
    return (dispatch) => {
        fetch('http://localhost:3000/podcasts', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json'
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
            getImageFromBackEnd()
            dispatch({ type: "CREATE_PODCAST", payload: data });
            history.push("/podcasts");
          })
          .catch((err) => dispatch({ type: "ERROR", payload: "" }));
      };
};

function getImageFromBackEnd(url, div){
  fetch(`http://localhost:3000/${url}`)
  .then(resp => resp.blob())
  .then(blob => {
      const img  = document.createElement("img")
      img.src = URL.createObjectURL(blob)
      div.insertAdjacentElement('afterbegin', img) //insert the img as the first child inside the post body - check out insertAdjacentElement here https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  })
}
    