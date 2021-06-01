import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { fetchPodcasts } from '../actions/fetchPodcasts';
import Podcasts from '../components/Podcasts';
import PodcastInput from '../components/PodcastInput';

class PodcastsContainer extends React.Component {

    render() {
        return (
            <div>
                <Route path='/podcasts/new' component={PodcastInput}/>
                <Route exact path='/podcasts' component={Podcasts}/>
            </div>
        );
    }
}

export default PodcastsContainer;