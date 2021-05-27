import React, { Component } from 'react';
import { getPodcast } from "../redux/actions/podcastActions";
import { connect } from 'react-redux';
import PodcastContainer from './PodcastContainer'

class PodcastList extends Component {
    componentDidMount() {
        this.props.getPodcast();
    }

    render() {
        return (
            <div>
                <h1>Podcasts</h1>
                {this.props.podcast.map((p) => (
                    <PodcastContainer podcast={p} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        podcast: state.podcast,
    }
}

export default connect(mapStateToProps, { getPodcast })(PodcastList);