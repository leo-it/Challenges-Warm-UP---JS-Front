import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import FormularioPost from './components/FormularioPost';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
     {/*  <Route path="/operations" component={Operations}/> */}
     <Route path="/formulario" exact component={FormularioPost}/>
     

    </Switch>
    </BrowserRouter>
  );
}

export default App;
