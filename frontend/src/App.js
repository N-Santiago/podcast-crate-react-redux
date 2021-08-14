import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '@fontsource/roboto';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error';
import Podcasts from './components/Podcasts';
import Podcast from './components/Podcast';
import PodcastInput from './components/PodcastInput';
import PodcastEdit from './components/PodcastEdit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import { fetchPodcasts } from './actions/fetchPodcasts';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPodcasts();
  }

  render() {
    return (
      <div className="App">
        < Navbar />
        < Toolbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/podcasts/new' component={PodcastInput}/>
            <Route exact path='/podcasts' render={(routerProps) => <Podcasts {...routerProps} podcasts={this.props.podcasts}/>}/>
            <Route exact path='/podcasts/:id/edit' render={(routerProps) => {
                const podcast = this.props.podcasts.find(podcast => podcast.id === parseInt(routerProps.match.params.id))  
                return (!!podcast) ? (
                <PodcastEdit {...routerProps} {...podcast}/> 
                ) : (
                    < Error />
                )   
            }}
            /> 
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
        <Toolbar />
        <Footer />
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



