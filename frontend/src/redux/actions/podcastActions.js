export const getPodcast = () => {
    return (dispatch) => {
        fetch("https://localhost:3000/podcasts")
            .then((res) => res.json())
            .then((data) => console.log(data)); 
    }
} 