import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPodcasts } from '../actions/fetchPodcasts';


class Podcasts extends React.Component {
    componentDidMount() {
        this.props.fetchPodcasts();
    }

    render() {
        return (
            <div>
                {this.props.podcasts.map((podcast) => (
                    <div key={podcast.id}>
                        <h2>{podcast.title}</h2>
                        <Link to={`/podcasts/${podcast.id}`}><p><img src={podcast.image} width={300} height={300} alt={"podcast"} /></p></Link>
                        <p>{podcast.website}</p>
                    </div>
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
