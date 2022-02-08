import List from '@material-ui/core/List';
import { ListItem, Link, ListItemText, Toolbar } from '@material-ui/core/';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      {<h1>About The Project:</h1>}
      {<p>Podcast Crate is my React/Redux and final Flatiron project.
          Like the previous projects, I wanted it to be about something 
          I love and I'm passionate about. When I'm not listening to
          my record collection, the latest playlists on Spotify or 
          my favorite bands new albums on Bandcamp, I'm listening to a 
          bunch of podcasts; from Marc Maron's fascinating conversations
          with all kind of artists on his <i>WTF</i> podcast, to Jim Cornette 
          ranting about modern pro wrestling. I might consider my own taste
          for podcasting ecclectic or perhaps all over the place. I 
          want to share this passion as I keep learning and improving as a
          Full Stack Developer, one frustrating error at a time.</p>}
      {<h1>About Me:</h1>}
      {<p>My name is Norberto Santiago, born and raised in the beautiful 
          island of Puerto Rico. Through my entire life I've been a geeky
          person who goes deep down in all kinds of rabbit holes and loves
          technology. I graduated from Universidad Interamericana de Puerto 
          Rico with a Computer Science degree concentrated on Networking 
          Administration. Worked on smaller projects and later in the West Side
          Aerospace Industry specializing in SAP. 
          
          Eventually, I decided to have an Alaskan adventure with my life 
          partner and her two kids and that's when I discovered Flatiron
          School. Not only it was an opportunity to finally learn to code, it
          was the chance to integrate the things I love to my techy professional 
          life.
          
          I'm a blogger and podcaster myself and you can visit a few of my personal 
          projects in the links below:</p>}
      {<List component="nav" aria-label="My Links" >
          <ListItem button color="inherit" component={Link} href='https://twitter.com/Norbert_82' target="_blank" rel="noopener noreferrer">
              <ListItemText primary="My personal Twitter account." />
          </ListItem>
          <ListItem button color="inherit" component={Link} href='https://www.instagram.com/lechecocoproductions' target="_blank" rel="noopener noreferrer">
            <ListItemText primary="Lechecoco Productions: We talk about beers, movies and other topics (in Spanish)." />
          </ListItem>
        </List>}  
        <Toolbar />
        <Footer />  
    </div>
  );
};

export default About;