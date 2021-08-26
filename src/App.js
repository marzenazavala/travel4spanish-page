import React from 'react'
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AppAppBar from './modules/views/AppAppBar';
import EightSteps from './pages/EightSteps';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import AuthProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppAppBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/8-steps" component={EightSteps} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={ProfilePage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
 