import React from 'react';

const Podcasts = (props) => {
    return (
        <div>
            <h2>{props.podcast.title}</h2>
            <p>{props.podcast.website}</p>
        </div>
    );
};

export default Podcasts;

