import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import {signup, login, logout } from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () =>{

    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    // TESTING!!!!!!!!

    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    window.store = store;


    // TESTING!!!!!!!!

    ReactDOM.render(< Root store={store}/>, root);
});
