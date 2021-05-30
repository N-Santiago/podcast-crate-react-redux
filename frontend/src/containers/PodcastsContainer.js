import React from 'react'
import { connect } from 'react-redux'
import { fetchPodcasts } from '../actions/fetchPodcasts'
import Podcasts from '../components/Podcasts'
import PodcastInput from '../components/PodcastInput'

class PodcastsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPodcasts()
    }

    render() {
        if (this.props.podcasts) {
        return (
            <div>
                < PodcastInput />
                 {this.props.podcasts.map(podcast => {
                    return (
                       <Podcasts podcast={podcast} />       
                    )})
                })
            </div>
        )
    } else {
        return null
    }}
}    

const mapStateToProps = state => {
    return {
        podcasts: state.podcasts
    }
}

export default connect(mapStateToProps, { fetchPodcasts })(PodcastsContainer)