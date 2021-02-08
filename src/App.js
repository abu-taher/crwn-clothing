import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
      </Switch> 
    </div>
  );
}

export default App;
