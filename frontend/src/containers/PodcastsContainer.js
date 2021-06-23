import React from 'react';
import { Route, Switch } from 'react-router-dom'
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
                <Switch>
                    <Route path='/podcasts/new' component={PodcastInput}/>
                    <Route exact path='/podcasts' render={(routerProps) => <Podcasts {...routerProps} podcasts={this.props.podcasts}/>}/>
                    <Route path='/podcasts/:id' render={(routerProps) => <Podcast {...routerProps} podcasts={this.props.podcasts}/>}/>
                </Switch> 
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
