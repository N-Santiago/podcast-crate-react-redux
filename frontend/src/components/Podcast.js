import EpisodesContainer from '../containers/EpisodesContainer'
import { Link } from 'react-router-dom'
import image from './noimage.jpeg'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

const Podcast = ({id, title, image_format, website, history, episodes}) => {
    const [countUp, setCountUp] = useState(0)

    const [countDown, setCountDown] = useState(0)

    return (
        <div>
            <div key={id}>
                <h2>{title}</h2>
                <Link to={`/podcasts/${id}`}><img id={`podcast-${id}`} src={image_format ? image_format.url : image} width={300} height={300} alt={"podcast"} /></Link>
                <p>{website}</p>
                <Button onClick={() => setCountUp(countUp + 1)}><ThumbUpIcon />{`${countUp === 0 ? ' ' : countUp}`}</Button><Button onClick={() => setCountDown(countDown + 1)}><ThumbDownIcon />{`${countDown === 0 ? ' ' : countDown}`}</Button>  
            </div>
            {(!!history && history.location.pathname === `/podcasts/${id}`) ? <EpisodesContainer podcast={{id, title, image_format, website, episodes}} /> : null} 
        </div>
    )
};

export default Podcast;