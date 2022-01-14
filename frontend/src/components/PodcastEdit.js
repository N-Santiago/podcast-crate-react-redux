import React from 'react'
import { connect } from 'react-redux'
import { editPodcast } from '../actions/index'
import { Button, Box } from '@material-ui/core'

class PodcastEdit extends React.Component {
    state = {
        title: this.props.title,
        image: '',
        website: this.props.website
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target) 
        this.props.editPodcast(formData, this.props.id, this.props.history);
        this.setState({
            title: '',
            image: '',
            website: ''
        })
    }
    
    render() {
        return (
            <div>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Edit Podcast</h3>
                    <fieldset>
                        <label>Title:</label>
                        <input type='text' placeholder='Title' value={this.state.title} name='title' onChange={this.handleChange}/><br /><br />
                    </fieldset>
                    <fieldset>
                        <label>Image:</label>
                        <input type='file' placeholder='Image' value={this.state.image} name='image' accept='image/*' encType="multipart/form-data" onChange={this.handleChange} /><br /><br />
                    </fieldset>
                    <fieldset>
                        <label>Website:</label>
                        <input type='text' placeholder='Website' value={this.state.website} name='website' onChange={this.handleChange} /><br /><br />
                    </fieldset><br/>
                        <Button variant="contained" size="small" color="inherit" type='submit'>Submit</Button>
                </form>
                </Box>
            </div>
        )
    }
}

export default connect(null, { editPodcast })(PodcastEdit)