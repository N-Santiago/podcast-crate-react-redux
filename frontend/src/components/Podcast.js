import EpisodesContainer from '../containers/EpisodesContainer'
import { Link } from 'react-router-dom'
import image from './noimage.jpeg'
import { useSelector } from 'react-redux'

const Podcast = ({id, title, image_format, website, user_id, history, episodes}) => {
    const user = useSelector(state => state.authorization.currentUser)

    return (
        <div>
            <div key={id}>
                    <h2>{title}</h2>
                    <Link to={`/podcasts/${id}`}><img id={`podcast-${id}`} src={image_format ? image_format.url : image} width={300} height={300} alt={"podcast"} /></Link>
                    <p>{website}</p>
            </div>
            {(!!history && history.location.pathname === `/podcasts/${id}`) ? <EpisodesContainer podcast={{id, title, image_format, website, user_id, episodes}}  currentUser={user} /> : null} 
        </div>
    )
};


export default Podcast;