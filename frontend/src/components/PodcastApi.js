import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Client } from 'podcast-api';

export default class PodcastApi extends Component {
  state = {
    podcast: [],
  };

  componentDidMount() {
    const client = Client({ apiKey: '521822f39f8d4140bd5ab8dcdae30b7f' });
    debugger
    client.search({
    q: 'star wars',
    sort_by_date: 0,
    type: 'episode',
    offset: 0,
    len_min: 10,
    len_max: 30,
    genre_ids: '68,82',
    published_before: 1580172454000,
    published_after: 0,
    only_in: 'title,description',
    language: 'English',
    safe_mode: 0,   
    }).then((res) => this.setState({ podcast: res.data }))
      // Get response json data here   
      .catch((error) => {
        console.log(error)
    });

    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch("https://api.simplecast.com/podcasts", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

  } 
  
  render() {
    return (
      <div>
        {this.state.podcast.map(p => {
          return (
            <div>
            {p.title}
            </div>
          )
        })}
      </div>
    );
  }
}