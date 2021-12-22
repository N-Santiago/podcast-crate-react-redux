import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '@fontsource/roboto';
import { Toolbar, Box } from '@material-ui/core/';
import Error from './components/Error';
import Podcast from './components/Podcast';
import About from './components/About';
import Home from './components/Home';
import Podcasts from './components/Podcasts';
import PodcastEdit from './components/PodcastEdit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { connect } from 'react-redux';
import { fetchPodcasts } from './actions/fetchPodcasts';
import { wrappedComponents } from './components/index';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchPodcasts();
  }

  render() {
    return (
      <div className="App">
        < Navbar />
        < Toolbar />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          textAlign="center">
        < Toolbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' render={About}/>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/podcasts/new' render={(routerProps) => <wrappedComponents.ProtectedPodcastInput protected {...routerProps} />}/>
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
        </Box>
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



