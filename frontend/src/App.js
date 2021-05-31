import React from 'react';
// import { fetchPodcasts } from './actions/fetchPodcasts'
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

// const mapStateToProps = (state) => {
//   return {
//     podcasts: state.podcasts
//   }
// }

export default App;

// Routes
// podcasts
// podcasts/:id - show episodes 
//podcasts/new - form 

