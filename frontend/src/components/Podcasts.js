import Podcast from './Podcast'
import { Grid } from '@material-ui/core'

const Podcasts = (props) => {
    
    const podcasts = () => {
        return props.podcasts.map((podcast) => {
            return < Podcast key={podcast.id} {...podcast} />
        })
    } 
    return (
        <div className='podcast'>
          <Grid container spacing={3} 
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignContent='center'
          >
                {podcasts()}
          </Grid>
        </div>
    );
}

export default Podcasts