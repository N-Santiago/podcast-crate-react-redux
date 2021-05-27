import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PodcastApi extends Component {
  state = {
    podcast: [],
  };
  
  render() {
    return (
      <div>
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