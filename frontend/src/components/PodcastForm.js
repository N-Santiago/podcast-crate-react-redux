import React, { Component } from 'react'
import { createPodcast } from "../redux/actions/podcastActions"
import { connect } from 'react-redux'

class PodcastForm extends Component {
    state = {
        title: '',
        image: '',
        country: '',
        website: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPodcast(this.state)
    }

    render() {
        return (
            <div>
                <h1>Submit a Podcast</h1>
                <form onSubmit={this.handleSubmit}>
                    Title:
                    <input type='text' name='title' onChange={this.handleChange} value={this.state.title} />
                    Image:
                    <input type='image_url' name='image' onChange={this.handleChange} value={this.state.image} />
                    Country:
                    <input type='text' name='country' onChange={this.handleChange} value={this.state.country} />
                    Website:
                    <input type='text' name='website' onChange={this.handleChange} value={this.state.website} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { createPodcast })(PodcastForm);