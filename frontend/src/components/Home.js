import Login from './Login'
import * as React from 'react';
import {Box, Button} from '@material-ui/core/';
import image from './mic.jpg'

const Home = (props) => {
  return (
    <div>
      <Box sx={{
        width: 800,
        height: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between' 
      }}>
        <article>
          <h1>Welcome to our Podcast App</h1>
          <h2>Feel free to share your favorites or have fun listening to the ones available.</h2>
        </article>
        <img src={image} width={300} height={300} />
      </Box><br/>
      < Login history={props.history} />
      <Button href="/signup" color="inherit">New User? Please Signup</Button>
    </div>
  );
};

export default Home;
