import React from 'react'

const Episodes = (props) => {
    return (
        <div>
            {props.episodes && props.episodes.map(episode => 
                <div key={episode.id}>
                    <h3>{episode.title}</h3>
                    <iframe src={episode.spotify_link} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    {/* <iframe src="https://open.spotify.com/embed/episode/09Cc2hVGLaktgswKQefePy" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                </div> 
                )}
        </div>
    )
}

export default Episodes