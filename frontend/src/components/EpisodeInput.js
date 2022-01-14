import React from 'react'
import { connect } from 'react-redux'
import { addEpisode } from '../actions/addEpisode';
import { Box, Button, Link } from '@material-ui/core/';

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
        this.props.addEpisode(this.state, this.props.podcast.id, this.props.history)
        this.setState({
            name: '',
            date: '',
            spotify_link: ''
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Button color="inherit" component={Link} href={`/podcasts/${this.props.podcast.id}/edit`}><h2>Edit Podcast</h2></Button>
                </div>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                <form onSubmit={this.handleSubmit}>
                <h3>Enter an Episode</h3>
                <fieldset>
                    <label>Episode Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} /><br /><br />
                </fieldset>
                <fieldset>
                    <label>Date:</label>
                    <p><i><small>In order to keep stuff as accurate as possible, please enter date episode was published on Spotify.</small></i></p>
                    <input type='date' placeholder='Date' value={this.state.date} name='date' onChange={this.handleChange} /><br /><br />
                </fieldset> 
                <fieldset>   
                    <label>Spotify Embedded URL:</label>
                    <p><i><small>Spotify's iframe code is hardcoded. Go to copy embedded link on the Spotify's podcast and only copy the url on that code.</small></i></p> 
                    <p><i><small>Hope by complicating things, this turn out to be fun.</small></i></p>
                    <input type='text' placeholder='Spotify Embedded URL' value={this.state.spotify_link} name='spotify_link' onChange={this.handleChange} /><br /><br />
                </fieldset><br/>    
                    <Button variant="contained" size="small" color="inherit" type='submit'>Submit</Button>
                </form>
                </Box><br/>
            </div>
        )
    }
}

export default connect(null, { addEpisode })(EpisodeInput)