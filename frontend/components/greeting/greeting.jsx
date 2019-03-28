import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ( {currentUser, logout }) => {

    const sessionLinks = () => {
        return(
            <nav className="login-signup">
                <Link to="/login">Log in</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign Up</Link>            
            </nav>
        )
    }


    const personalGreeting = () => {
        return(
            <hgroup className="header-group">
                <h2 className="header-name">Hello, {currentUser.username}!</h2>
                <button className="header-button" onClick={logout}>Logout</button>
            
            </hgroup>
        )
    }
    return currentUser ? personalGreeting() : sessionLinks();
};



export default Greeting;