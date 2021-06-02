import React from 'react'

const Podcast = (props) => {
    
    return (
        <div>
            <h2>{props.podcast.title}</h2>
            <p><img src={props.podcast.image} width={300} height={300} /></p>
            <p>{props.podcast.website}</p>
        </div>
    );
};

export default Podcast;