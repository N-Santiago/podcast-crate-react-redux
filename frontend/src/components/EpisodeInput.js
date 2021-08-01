import React from 'react'
import { connect } from 'react-redux'
import { addEpisode } from '../actions/addEpisode';

class EpisodeInput extends React.Component {

    state = {
        name: '',
        date: '',
        spotify_link: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEpisode(this.state, this.props.podcast.id)
        this.setState({
            name: '',
            date: '',
            spotify_link: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Enter an Episode</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Episode Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} /><br /><br />
                    <label>Date:</label>
                    <p><i><small>In order to keep stuff as accurate as possible, please enter date episode was published on Spotify.</small></i></p>
                    <input type='date' placeholder='Date' value={this.state.date} name='date' onChange={this.handleChange} /><br /><br />
                    <label>Spotify Embedded URL:</label>
                    <p><i><small>Spotify's iframe code is hardcoded. Go to copy embedded link on the Spotify's podcast and only copy the url on that code.</small></i></p> 
                    <p><i><small>Hope by complicating things, this turn out to be fun.</small></i></p>
                    <input type='text' placeholder='Spotify Embedded URL' value={this.state.spotify_link} name='spotify_link' onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        )
    }
}

export default connect(null, { addEpisode })(EpisodeInput)