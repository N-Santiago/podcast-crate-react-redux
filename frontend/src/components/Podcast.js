import React from 'react'
import EpisodesContainer from '../containers/EpisodesContainer'

const Podcast = (props) => {

    let podcast = props.podcasts.filter(podcast => podcast.id == props.match.params.id)[0]
    
    return (
        <div>
            <h2>{podcast ? podcast.title : "Podcast Not Available"}</h2>  
            {podcast ? <p><img id={`podcast-${podcast.id}`} src={podcast ? podcast.image : null} width={300} height={300} alt={'Podcast Crate'} /></p> : null}
            {podcast ? podcast.website : null}
            <EpisodesContainer podcast={podcast} />
        </div>
    );
};

export default Podcast;