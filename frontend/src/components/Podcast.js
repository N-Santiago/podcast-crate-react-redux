import EpisodesContainer from '../containers/EpisodesContainer'
import { Link } from 'react-router-dom'
import image from './noimage.jpeg'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

const Podcast = ({id, title, image_format, website, history, episodes}) => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div key={id}>
                    <h2>{title}</h2>
                    <Link to={`/podcasts/${id}`}><img id={`podcast-${id}`} src={image_format ? image_format.url : image} width={300} height={300} alt={"podcast"} /></Link>
                    <p>{website}</p>
                    <Button onClick={() => setCount(count + 1)}><ThumbUpIcon />{`${count === 0 ? ' ' : count}`}</Button> 
            </div>
            {(!!history && history.location.pathname === `/podcasts/${id}`) ? <EpisodesContainer podcast={{id, title, image_format, website, episodes}} /> : null} 
        </div>
    )
};

export default Podcast;