import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo/navbar_logo';

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
                                <a href="/"><Logo/></a>
                                {/* <Link to="/login" className="fp-logo-link"><img className="fp-logo" src={window.logo} alt="pixel800 image"/></Link> */}
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/donald-liu" target="_blank">LinkedIn</a>
                            </div>
                            <div>
                                <a href="https://github.com/Donaldliu94" target="_blank">GitHub</a>
                            </div>
                            <div>
                                <a href="https://angel.co/donald-liu-1" target="_blank">AngelList</a>
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
                        <div className="user-body">

                            <div className="randombox">

                            </div>

                            <div className="user-body-left">
                                <div className="girl2">
                                    <img alt="peace" className="girlpeace" src="https://drscdn.500px.org/photo/297055921/q%3D80_h%3D450/v2?user_id=71974091&amp;webp=true&amp;sig=758803e4ef4d7f2cf8b7fa500b5f4df836a8d2829f0c0cfbee4a090a4d528d7c"></img>
                                </div>

                                <div className="girl2-1">
                                    <img alt="walk-away" className="girlpeace-walk-away" src="https://drscdn.500px.org/photo/297038873/q%3D80_h%3D450/v2?user_id=71974091&amp;webp=true&amp;sig=2fe38abc17cdd60b48cb848836d2f657dfa502952863ba0f0dfb2971cef9ca03"></img>
                                </div>

                                <div className="butterflies">
                                    <img srcSet="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="butterflies1" alt="Close Up of Leaf" data-image-width="3840" data-image-height="2160" data-big-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>

                                <div className="baby-picking-leaves">
                                    <img srcSet="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="baby-leaves" alt="Boy in Gray Knit Hat" data-image-width="2048" data-image-height="2476" data-big-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>
                            </div>

                            <div className="user-body-right">
                                <div className="girl1">
                                    <img alt="Lisa" className="Elements__HomefeedPhotoImage-eNfnom-dBEpbj" src="https://drscdn.500px.org/photo/298865833/q%3D80_m%3D1000/v2?user_id=71974091&amp;webp=true&amp;sig=0f710268e7083bb67fa94fbc42a69b52ff4ba1b2f7c23264907931750727fb6d"></img>
                                </div>
                                

                                <div className="korea-hill">
                                    <img srcSet="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="hill-of-korea" alt="Cherry Blossoms Tree Near Body of Water" data-image-width="4368" data-image-height="2912" data-big-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>

                                <div className="japan-cherry-blosson">
                                    <img srcSet="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="cherry-blossom-tree" alt="Close Up Photography of Cherry Blossom Tree" data-image-width="6000" data-image-height="4000" data-big-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                                </div>

                                <div className="girl-smile-new">
                                    <img alt="Lisa1" className="girl-smiling" src="https://drscdn.500px.org/photo/298324081/q%3D80_m%3D1000/v2?user_id=71974091&amp;webp=true&amp;sig=14ba40a22848e1e40b6934a3d3bb90fc6468687aba771a6862be236d27b0b3a8" ></img>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;
