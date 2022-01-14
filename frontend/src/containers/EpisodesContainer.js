import React from 'react'
import EpisodeInput from '../components/EpisodeInput'
import Episodes from '../components/Episodes'

class EpisodesContainer extends React.Component {
    
    render() { 
        console.log(this.props.currentUser)
        // debugger 
        return (
            <div>
                {(parseInt(this.props.podcast.user_id) === parseInt(this.props.currentUser?.data?.id)) ? < EpisodeInput podcast={this.props.podcast} /> : null}
                < Episodes episodes={this.props.podcast.episodes}  /> 
            </div>
        )
    }
}

export default EpisodesContainer