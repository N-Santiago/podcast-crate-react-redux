// import EpisodesContainer from '../containers/EpisodesContainer'
import { Link } from 'react-router-dom'

const Podcast = ({id, title, image_format, website}) => {

    // debugger 
    return (
        <div>
            <div key={id}>
                    <h2>{title}</h2>
                    <Link to={`/podcasts/${id}`}><img id={`podcast-${id}`} src={image_format ? image_format.url : process.env.PUBLIC_URL + '/public/noimage.jpeg'} width={300} height={300} alt={"podcast"} /></Link>
                    <p>{website}</p>
            </div>
            {/* <EpisodesContainer podcast={{id, title, image_format, website}} /> */}
        </div>
    );
};

export default Podcast;