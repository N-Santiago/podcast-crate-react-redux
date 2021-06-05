import React from 'react'
import EpisodeInput from '../components/EpisodeInput'
import Episodes from '../components/Episodes'

class EpisodesContainer extends React.Component {
    render() {
        return (
            <div>
                < EpisodeInput />
                < Episodes episodes={this.props.podcast && this.props.podcast.episodes} />
            </div>
        )
    }
}

export default EpisodesContainer