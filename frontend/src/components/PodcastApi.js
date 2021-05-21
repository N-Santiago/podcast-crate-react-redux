import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Client } from 'podcast-api';

export default class PodcastApi extends Component {
  state = {
    podcast: [],
  };

  componentDidMount() {
    const client = Client({ apiKey: '521822f39f8d4140bd5ab8dcdae30b7f' });
    // debugger
    client.search({
    q: 'Conan',
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
      .then((podcast) => this.setState({ podcast: podcast.data.results }))
      // Get response json data here  
      .catch((error) => {
        console.log(error)
    });
  } 
  
  render() {
    return (
      <div>
        {this.state.podcast.map(p => { 
          return (
            <div>
              <img src={p.podcast.image} />  
              <p><strong>{p.podcast.title_original} - {p.title_original}/</strong>
              <br /><br />
              {p.description_original}
              <br /><br />
              <audio controls>
              <source src={p.audio} type="audio/mpeg" />
              </audio></p>
            </div>
          )
        })}
      </div>
    );
  }
}