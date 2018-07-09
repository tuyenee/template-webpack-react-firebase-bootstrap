import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require("bootstrap/dist/css/bootstrap.min.css");
require('./css/app.css');
var config = {
    apiKey: "AIzaSyAnO3XmIyz1M_3FQxHPwH49_uVbOw-P25c",
    authDomain: "livesport-vietnam.firebaseapp.com",
    databaseURL: "https://livesport-vietnam.firebaseio.com",
    projectId: "livesport-vietnam",
    storageBucket: "livesport-vietnam.appspot.com",
    messagingSenderId: "175561067671"
  };
firebase.initializeApp(config);

window.firebase = firebase;
window.myApp = ReactDOM.render(<App/>, document.getElementById('app'));