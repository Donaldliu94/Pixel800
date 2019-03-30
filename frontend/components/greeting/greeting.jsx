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

            <div>

                <nav className="user-nav-bar">
                    <div className="user-nav-bar-left">
                        
                        <div className="user-nav-logo">
                            <a href="/">Pixel800</a>
                        </div>

                        <div className="user-nav-discover">
                            Discover
                        </div>
                        
                        <div className="user-nav-dropdown">
                            
                        </div>

                    </div>



                    <div className="user-nav-bar-right">
                        <div>
                            Upload
                        </div>
                    </div>

                </nav>

                <hgroup className="header-group">
                    <h2 className="header-name">Hello, {currentUser.username}!</h2>
                    <button className="header-button" onClick={logout}>Logout</button>
                </hgroup>
            </div>
        )
    }
    return currentUser ? personalGreeting() : sessionLinks();
};



export default Greeting;