import React from 'react';
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

