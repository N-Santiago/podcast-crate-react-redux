import React from 'react';
import { Link } from 'react-router-dom';


const Podcasts = (props) => {

    return (
        <div>
            {props.podcasts.map((podcast) => (
                <div key={podcast.id}>
                    <h2>{podcast.title}</h2>
                    <Link to={`/podcasts/${podcast.id}`}><p><img id={`podcast-${podcast.id}`} src={podcast.image} width={300} height={300} alt={"podcast"} /></p></Link>
                    <p>{podcast.website}</p>
                </div>
            ))}
        </div>
    );
}

export default Podcasts