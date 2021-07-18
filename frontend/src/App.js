import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import PodcastsContainer from './containers/PodcastsContainer'

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <h1>Podcast Crate</h1>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch> 
        < PodcastsContainer />
      </div>
    )
  }
}

export default App;



