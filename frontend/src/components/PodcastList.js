import React, { Component } from 'react';
import { getPodcast } from "../redux/actions/podcastActions";
import { connect } from 'react-redux';
import PodcastListItem from './PodcastListITem'

class PodcastList extends Component {
    componentDidMount() {
        this.props.getPodcast();
    }

    render() {
        return (
            <div>
                <h1>Podcasts</h1>
                {this.props.podcast.map((p) => (
                    <PodcastListItem podcast={p} />
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