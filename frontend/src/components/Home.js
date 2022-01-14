import Login from './Login'
import * as React from 'react';
import {Box, Button} from '@material-ui/core/';

const Home = (props) => {
  return (
    <div>
      <Box sx={{
        width: 600,
        height: 150,
        backgroundColor: 'lightgrey',
        borderRadius: 16
      }}>
        {<h1>Welcome to our Podcast App</h1>}
        {<h2>Feel free to share your favorites or have fun listening to the ones available.</h2>}
      </Box><br/>
      < Login history={props.history} />
      <Button href="/signup" color="inherit">New User? Please Signup</Button>
    </div>
  );
};

export default Home;
