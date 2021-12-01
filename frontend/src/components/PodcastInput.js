import React from 'react'
import { connect } from 'react-redux'
import { addPodcast } from '../actions/index'
import { Button } from '@material-ui/core'

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
                <h1>Enter a Podcast</h1>
                <form onSubmit={this.handleSubmit}>
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
            </div>
        )
    }
}

export default connect(null, { addPodcast })(PodcastInput)