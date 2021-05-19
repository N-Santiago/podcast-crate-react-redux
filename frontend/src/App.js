import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PodcastList from './components/PodcastList'
import PodcastForm from './components/PodcastForm'
import PodcastApi from './components/PodcastApi'

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/podcasts' component={PodcastList} />
      <Route path='/podcasts/new' component={PodcastForm} />
      <Route path='/podcasts/api' component={PodcastApi} />
    </Switch>  
  </div>;

}

export default App;
