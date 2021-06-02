
import React from 'react';
import { Route } from 'react-router-dom'
import Podcasts from '../components/Podcasts';
import Podcast from '../components/Podcast';
import PodcastInput from '../components/PodcastInput';

class PodcastsContainer extends React.Component {

    render() {
        return (
            <div>
                <Route path='/podcasts/new' component={PodcastInput}/>
                <Route exact path='/podcasts' component={Podcasts}/>
                {/* <Route path='podcasts/:id' component={Podcast}/> */}
            </div>
        );
    }
}

export default PodcastsContainer;