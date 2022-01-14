import React from 'react'
import EpisodeInput from '../components/EpisodeInput'
import Episodes from '../components/Episodes'
import '@fontsource/roboto';

class EpisodesContainer extends React.Component {
    
    render() { 
        return (
            <div>
                {(parseInt(this.props.podcast.user_id) === parseInt(this.props.currentUser?.data?.id)) ? < EpisodeInput podcast={this.props.podcast} /> : null}
                < Episodes episodes={this.props.podcast.episodes}  /> 
            </div>
        )
    }
}

export default EpisodesContainer