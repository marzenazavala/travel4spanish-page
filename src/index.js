import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import configureStore from './store';
import firebase from './firebase-config';
import Routes from './Routes';
import routeConfiguration from './routeConfiguration';
import { authInfoSuccess } from './reducers/auth.reducer';


const store = configureStore({}, firebase)

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch(authInfoSuccess(user));
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          {/* <Routes routes={routeConfiguration}/> */}
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
