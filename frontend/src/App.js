import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PodcastList from './components/PodcastList'
import PodcastForm from './components/PodcastForm'

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/podcast' component={PodcastList} />
      <Route path='/podcast/new' component={PodcastForm} />
    </Switch>  
  </div>;

}

export default App;
