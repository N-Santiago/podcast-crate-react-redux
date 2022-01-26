import React from 'react'
import { connect } from 'react-redux'
import { addPodcast } from '../actions/index'
import { Button, Box, Grid, TextField } from '@material-ui/core'

class PodcastInput extends React.Component {
    state = {
        title: '',
        image: '',
        website: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target) 
        this.props.addPodcast(formData, this.props.history);
        this.setState({
            title: '',
            image: '',
            website: ''
        })
    }
    
    render() {
        return (
            <div>
                <Box sx={{ 
                    p: 2, 
                    border: '1px solid grey',
                    borderRadius: 5,
                    backgroundColor: '#f2f2f2'
                }}>
                <form onSubmit={this.handleSubmit} >
                    <Grid container alignItems="center" justifyContent="center" direction="column">
                        <Grid item>
                            <h3>Enter New Podcast</h3>
                        </Grid>  
                        <Grid item>
                            <TextField
                                label='Title'
                                type='text'
                                name='title'
                                id='title'
                                value={this.state.title}  
                                onChange={this.handleChange} 
                                required
                            />
                        </Grid><br/>
                        <Grid item>
                            <TextField
                                label='Image'
                                type='file' 
                                name='image'
                                id='image'
                                accept='image/*' 
                                encType="multipart/form-data" 
                                value={this.state.image}  
                                onChange={this.handleChange}  
                            />
                        </Grid><br/>
                        <Grid item>
                            <TextField
                                label='Website'
                                type='url'  
                                name='website'
                                id='website'
                                pattern="https?:\/\/.+" 
                                title="Include http://"
                                value={this.state.website}  
                                onChange={this.handleChange}  
                            />
                        </Grid><br/>
                        <Grid item>
                            <Button variant="contained" size="small" color="inherit" type='submit'>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                </Box>
            </div>
        )
    }
}

export default connect(null, { addPodcast })(PodcastInput)