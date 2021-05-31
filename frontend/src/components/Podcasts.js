import React from 'react';

const Podcasts = (props) => {
    return (
        <div>
            <h2>{props.podcast.title}</h2>
            <p><img src={props.podcast.image} width={300} height={300}></img></p>
            <p>{props.podcast.website}</p>
        </div>
    );
};

export default Podcasts;

