import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPodcastQuery } from '../redux/actions/podcastActions'
import PodcastApi from './PodcastApi'


class PodcastSearch extends Component {
    state = {
        q: ''
       
    }

    handleOnChange = event => {
        this.setState({q: event.target.value})
    }

    handleOnSubmit = event => {
        event.preventDefault()  
        this.props.searchPodcastQuery(this.state.q)
    }

    render() {
        return (
            <div>
                <h1>Podcast Search</h1>
                <form onSubmit={this.handleOnSubmit}>
                    Search:
                    <input type='text' name='q' value={this.state.q} onChange={this.handleOnChange} />
                    <button type='submit' style={{marginLeft: '5px'}}>Go</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { searchPodcastQuery })(PodcastSearch); 