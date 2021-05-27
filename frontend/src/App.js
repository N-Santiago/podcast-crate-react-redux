import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PodcastList from './components/PodcastList'
import PodcastForm from './components/PodcastForm'
import PodcastSearch from './components/PodcastSearch'
import PodcastApi from './components/PodcastApi'
// import PodcastApiShow from './components/PodcastApiShow'

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/podcasts' component={PodcastList} />
      <Route path='/podcasts/new' component={PodcastForm} />
      <Route path='/podcasts/search' component={PodcastSearch} />
      <Route path='/podcasts/api' component={PodcastApi} />
      {/* <Route path='/podcasts/api/:id' component={PodcastApiShow} /> */}
    </Switch>  
  </div>;

}

export default App;
