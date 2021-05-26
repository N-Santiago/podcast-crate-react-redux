import React, { Component } from "react";
import { Link } from "react-router-dom";
import PodcastSearch  from './PodcastSearch'

export default class PodcastApi extends Component {
  state = {
    podcast: [],
  };

  // componentDidMount() {
  //   const client = Client({ apiKey: 'API_KEY' });
  //   // debugger
  //   client.search({
  //   q: 'Star Wars',
  //   sort_by_date: 0,
  //   type: 'episode',
  //   offset: 0,
  //   len_min: 10,
  //   len_max: 30,
  //   genre_ids: '*',
  //   published_before: 1580172454000,
  //   published_after: 0,
  //   only_in: 'title,description',
  //   language: 'English',
  //   safe_mode: 0,   
  //   }) 
  //     .then((podcast) => this.setState({ podcast: podcast.data.results }))
  //     // Get response json data here  
  //     .catch((error) => {
  //       console.log(error)
  //   });
  // } 
  
  render() {
    return (
      <div>
        <PodcastSearch />
        <br /><br />
        {this.state.podcast.map(p => { 
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
        })}
      </div>
    );
  }
}