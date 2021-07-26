import React from 'react'
import EpisodeInput from '../components/EpisodeInput'
import Episodes from '../components/Episodes'

class EpisodesContainer extends React.Component {
    render() {
        return (
            <div>
                < EpisodeInput podcast={this.props.podcast} />
                < Episodes episode={this.props.podcast && this.props.podcast.episodes} />
            </div>
        )
    }
}

export default EpisodesContainer