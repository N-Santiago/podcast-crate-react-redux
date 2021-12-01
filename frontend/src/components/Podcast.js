import EpisodesContainer from '../containers/EpisodesContainer'
import { Link } from 'react-router-dom'
import image from './noimage.jpeg'

const Podcast = ({id, title, image_format, website, history, episodes}) => {

    // debugger 
    return (
        <div>
            <div key={id}>
                    <h2>{title}</h2>
                    <Link to={`/podcasts/${id}`}><img id={`podcast-${id}`} src={image_format ? image_format.url : image} width={300} height={300} alt={"podcast"} /></Link>
                    <p>{website}</p>
            </div>
            <div>
            {(!!history && history.location.pathname === `/podcasts/${id}`) ? <EpisodesContainer podcast={{id, title, image_format, website, episodes}} /> : null} 
            </div>
        </div>
    )
};

export default Podcast;