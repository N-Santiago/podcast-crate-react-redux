import React from 'react'
import { connect } from 'react-redux'
import { addEpisode } from '../actions/addEpisode';
import { Box, Button, Link, TextField, Grid } from '@material-ui/core/';

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
                </div><br/>
                <Box sx={{ 
                    p: 2, 
                    border: '1px solid grey',
                    borderRadius: 5,
                    backgroundColor: '#f2f2f2'
                }}>
                <form onSubmit={this.handleSubmit} >
                    <Grid container alignItems="center" justifyContent="center" direction="column">
                        <Grid item>
                            <h3>Enter an Episode</h3>
                        </Grid>  
                        <Grid item>
                            <TextField
                                label='Name'
                                type='text' 
                                name='name'
                                id='name' 
                                value={this.state.name}  
                                onChange={this.handleChange} 
                                required 
                            />
                        </Grid><br/>
                        <Grid item>
                            <TextField
                                type='date' 
                                name='date'
                                id='date' 
                                value={this.state.date}  
                                onChange={this.handleChange} 
                                required
                            />    
                            <p><i><small>In order to keep stuff as accurate as possible, please enter date episode was published on Spotify.</small></i></p>
                        </Grid> 
                        <Grid item>   
                            <TextField
                                label='Spotify URL'
                                type='url' 
                                name='spotify_link'
                                id='spotify_link' 
                                value={this.state.spotify_link}  
                                onChange={this.handleChange} 
                                pattern="https?:\/\/.+" 
                                title="Include http://" 
                                required 
                            />
                            <p><i><small>Spotify's iframe code is hardcoded. Go to copy embedded link on the Spotify's podcast and only copy the url on that code.</small></i></p> 
                            <p><i><small>Hope by complicating things, this turn out to be fun.</small></i></p>
                        </Grid>
                        <Grid item>     
                            <Button variant="contained" size="small" color="inherit" type='submit'>Submit</Button>
                        </Grid>
                    </Grid>    
                </form>
                </Box><br/>
            </div>
        )
    }
}

export default connect(null, { addEpisode })(EpisodeInput)