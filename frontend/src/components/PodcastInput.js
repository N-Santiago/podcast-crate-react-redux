import React from 'react'
import { connect } from 'react-redux'
import { addPodcast } from '../actions/addPodcast'

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
        this.props.addPodcast(this.state, this.props.history);
    }
    
    render() {
        return (
            <div>
                <h1>Enter a Podcast</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type='text' placeholder='Title' value={this.state.title} name='title' onChange={this.handleChange} /><br /><br />
                    <label>Image:</label>
                    <input type='text' placeholder='Image' value={this.state.image} name='image' onChange={this.handleChange} /><br /><br />
                    <label>Website:</label>
                    <input type='text' placeholder='Website' value={this.state.website} name='website' onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        )
    }
}

export default connect(null, { addPodcast })(PodcastInput)