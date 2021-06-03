import React from 'react';
import { Route } from 'react-router-dom'
import Podcasts from '../components/Podcasts';
import Podcast from '../components/Podcast';
import PodcastInput from '../components/PodcastInput';
import { connect } from 'react-redux';
import { fetchPodcasts } from '../actions/fetchPodcasts';

class PodcastsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPodcasts();
    }

    render() {
        return (
            <div>
                <Route path='/podcasts/new' component={PodcastInput}/>
                <Route exact path='/podcasts' component={Podcasts}/>
                <Route exact path='/podcasts/:id' render={(routerProps) => <Podcast {...routerProps} podcasts={this.props.podcasts}/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        podcasts: state.podcasts,
    };
};

export default connect(mapStateToProps, { fetchPodcasts })(PodcastsContainer);