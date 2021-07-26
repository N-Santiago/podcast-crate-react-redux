import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error';
import Podcasts from './components/Podcasts';
import Podcast from './components/Podcast';
import PodcastInput from './components/PodcastInput';
import { connect } from 'react-redux';
import { fetchPodcasts } from './actions/fetchPodcasts';
// import PodcastsContainer from './containers/PodcastsContainer'

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPodcasts();
  }

  
  render() {
    return (
      <div className="App">
        <h1>Podcast Crate</h1>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route exact path='/podcasts/new' component={PodcastInput}/>
                    <Route exact path='/podcasts' render={(routerProps) => <Podcasts {...routerProps} podcasts={this.props.podcasts}/>}/>
                    <Route exact path='/podcasts/:id' render={(routerProps) => {
                       const podcast = this.props.podcasts.find(podcast => podcast.id === parseInt(routerProps.match.params.id))  
                       return (!!podcast) ? (
                        <Podcast {...routerProps} {...podcast}/> 
                       ) : (
                           < Error />
                       )   
                    }} 
                    />
            <Route component={Error}/>
        </Switch> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      podcasts: state.podcasts,
  };
};

export default connect(mapStateToProps, { fetchPodcasts })(App);



