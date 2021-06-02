import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchPodcasts } from '../actions/fetchPodcasts';
import Podcast from './Podcast';


class Podcasts extends React.Component {
    componentDidMount() {
        this.props.fetchPodcasts();
    }

    render() {
        return (
            <div>
                {this.props.podcasts.map((podcast) => (
                    <Podcast podcast={podcast} key={podcast.id}/>
                    // <Link to={`/podcasts/${podcast.id}`}><Podcast podcast={podcast} key={podcast.id}/></Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        podcasts: state.podcasts,
    };
};

export default connect(mapStateToProps, { fetchPodcasts })(Podcasts);
