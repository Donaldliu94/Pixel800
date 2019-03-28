import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import {signup, login, logout } from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () =>{

    const root = document.getElementById('root');
    const store = configureStore();


    // TESTING!!!!!!!!

    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;


    // TESTING!!!!!!!!

    ReactDOM.render(< Root store={store}/>, root);
});
