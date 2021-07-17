import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PodcastsContainer from './containers/PodcastsContainer'

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <h1>Podcast Crate</h1>
        <Switch>
            <Route path='/' component={Home}/>
        </Switch> 
        < PodcastsContainer />
      </div>
    )
  }
}

export default App;



