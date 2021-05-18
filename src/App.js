import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
     {/*  <Route path="/operations" component={Operations}/> */}
     

    </Switch>
    </BrowserRouter>
  );
}

export default App;
