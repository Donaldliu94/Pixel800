import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div>
                <div className="hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-description">
                        <div className="description-top">Get inspired and share your best photos</div>
                        <div className="description-bottom">Find your home among the world's best photographers.</div>
                        {/* <a href="/signup"> */}
                            {/* <div className="description-btn">Join Pixel800</div> */}
                            <div className="description-btn"><Link to="/signup">Join Pixel800</Link></div>
                        {/* </a> */}
                    </div>

                    <nav className="splash-nav-bar">
                        <div className="login-nav-bar-left">
                            <div className="nav-logo">
                                <a href="/">Pixel800</a>
                                {/* <Link to="/login" className="fp-logo-link"><img className="fp-logo" src={window.logo} alt="pixel800 image"/></Link> */}
                            </div>
                            <div>
                                Discover
                            </div>
                            <div>
                                About
                            </div>
                            <div>
                                Studio
                            </div>
                        </div>

                        <div className="login-nav-bar-right">
                            <div className="splash-login"><Link to="/login">Log in</Link></div>
                            <div className="splash-signup"><Link to="/signup">Sign up</Link></div>
                        </div>
                    </nav>
                </div>
                
                <div className="middle-empty-space"></div>

                <div className="hero-bottom-half">
                    <div className="mid-splash-description-top">The top photos, chosen by you</div>
                    <div className="mid-splash-description-bottom">Discover what's trending according to photographers around the world.</div>

                    <div className="gallery">
                        {/* images */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;
