import Podcast from './Podcast'

const Podcasts = (props) => {
    
    const podcasts = () => {
        return props.podcasts.map((podcast) => {
            return < Podcast key={podcast.id} {...podcast} />
        })
    } 
    return (
        <div>
            {podcasts()}
        </div>
    );
}

export default Podcasts