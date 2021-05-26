import { Client } from 'podcast-api';

export const getPodcast = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/podcasts")
            .then((res) => res.json())
            .then((data) => 
                dispatch({ type: "FETCH_PODCAST_SUCCESS", payload: data })
            ); 
    }
} 

export const createPodcast = (newPodcastData, history) => {
    return (dispatch) => {
        fetch("http://localhost:3000/podcasts", {
            method: "POST",
            headers: {
                Accepts: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ podcast: newPodcastData }) 
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.statusText);
            }
        })
        .then(data => {
            dispatch({ type: "CREATE_PODCAST_SUCCESS", payload: data });
            history.push("/podcasts");
        })
        .catch((err) => dispatch({ type: "ERROR", payload: "" }));
    };
};

export const searchPodcastApi = (podcast) => {
    return {
        type: "SEARCH_API_PODCASTS",
        podcast
    }
}

export const searchPodcastQuery = (query) => {
        const client = Client({ apiKey: '521822f39f8d4140bd5ab8dcdae30b7f' });
        return (dispatch) => {
            client.search({
            q: `${query}`,
            sort_by_date: 0,
            type: 'episode',
            offset: 0,
            len_min: 10,
            len_max: 30,
            genre_ids: '*',
            published_before: 1580172454000,
            published_after: 0,
            only_in: 'title,description',
            language: 'English',
            safe_mode: 0,   
        })
        .then((data) => {
            dispatch(searchPodcastApi(data))
        })
        // Get response json data here  
            .catch((error) => {
                console.log(error)
        });
    }
} 

// export const searchPodcastQuery = (query) => {
//     const client = Client({ apiKey: '521822f39f8d4140bd5ab8dcdae30b7f' });
//     return dispatch => {
//         return fetch(`https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
//             .then(response => response.json())
//             .then(data => {
//                 dispatch(searchPodcastApi(data))
//             })
//             .catch((error) => {
//                 console.log(error)
//         })
//     }    
// }

