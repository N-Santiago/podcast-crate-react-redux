import React from 'react'

const Episodes = (props) => {
    
    const episodes = () => {
        // debugger 
        props.episodes && props.podcast.episodes.map(episode => 
            <div key={episode.id}>
                <h3>{episode.name}</h3>
                <iframe src={episode.spotify_link} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div> 
        )
    }

    return (
        <div>
            {episodes()}
        </div>
    )
}

export default Episodes