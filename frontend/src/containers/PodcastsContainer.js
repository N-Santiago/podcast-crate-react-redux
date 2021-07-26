import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Podcasts from '../components/Podcasts';
import Podcast from '../components/Podcast';
import PodcastInput from '../components/PodcastInput';
import Error from '../components/Error';
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
