import React from 'react';
// import { fetchPodcasts } from './actions/fetchPodcasts'
import { Route } from 'react-router-dom'
// import PodcastsContainer from './containers/PodcastsContainer'
import PodcastsContainer from './containers/PodcastsContainer'

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <h1>Podcast Crate</h1>
        < PodcastsContainer />
      </div>
    )
  }
}

export default App;

// Routes
// podcasts
// podcasts/:id - show episodes 
//podcasts/new - form 

