import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Home';
import AppAppBar from './modules/views/AppAppBar';
import EightSteps from './pages/EightSteps'

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/8-steps" component={EightSteps} />
      </Switch>
    </div>
  );
}

export default App;
 