import Login from './Login'
import * as React from 'react';
import Box from "@material-ui/core/Box";

const Home = () => {
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
        < Login />
    </div>
  );
};

export default Home;
