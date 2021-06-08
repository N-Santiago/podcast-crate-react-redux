import React from 'react'
import { connect } from 'react-redux'
import { addEpisode } from '../actions/addEpisode';

class EpisodeInput extends React.Component {

    state = {
        title: '',
        spotify_link: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEpisode(this.state, this.props.podcast.id)
        this.setState({
            title: '',
            spotify_link: ''
        })
        console.log(this.props.podcast.id) 
    }

    render() {
        return (
            <div>
                <h2>Enter an Episode</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Episode Title:</label>
                    <input type='text' placeholder='Title' value={this.state.title} name='title' onChange={this.handleChange} /><br /><br />
                    <label>Spotify Embedded URL:</label>
                    <p><i><small>Spotify's iframe code is hardcoded. Go to copy embedded link on the Spotify's podcast and only copy the url on that code. Hope by complicating things, this turn out to be fun.</small></i></p>
                    <input type='text' placeholder='Spotify Embedded URL' value={this.state.spotify_link} name='spotify_link' onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        )
    }
}

export default connect(null, { addEpisode })(EpisodeInput)