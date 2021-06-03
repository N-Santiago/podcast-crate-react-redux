import React from 'react'

const Podcast = (props) => {

    console.log(props)

    let podcast = props.podcasts[props.match.params.id - 1]
    
    return (
        <div>
            <h2>{podcast ? podcast.title : null}</h2>  
            {podcast ? <p><img src={podcast ? podcast.image : null} width={300} height={300} alt={'Podcast Crate'} /></p> : null}
            {podcast ? podcast.website : null}
        </div>
    );
};

export default Podcast;