import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Greeting extends React.Component {


    render() {
            return <div>
                <nav className="user-nav-bar">
                    <div className="user-nav-bar-left">
                        
                        <div className="user-nav-logo">
                            <a href="/">Pixel800</a>
                        </div>

                        <div className="user-nav-discover">
                            Discover
                        </div>
                       

                        <div className="user-ellipsis">
                            <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                            <div className="user-ellipsis-content">
                                <a href="#">About</a>
                                <a href="#">App</a>
                                <a href="#">Groups</a>
                                <a href="#">Quests</a>
                                <a href="#">Blog</a>
                                <a href="#">Licensing</a>
                                <a href="#">Studio</a>
                                <a href="#">Terms</a>
                                <a href="#">Privacy</a>
                            </div>
                        </div>
                    </div>

                    <div className="user-nav-bar-right">                    
                        <form >
                            <label className="search">
                                <FontAwesomeIcon icon={['fas', 'search']} />
                                <input placeholder="Search for photos, location, or people" ></input>
                            </label>
                        </form>

                        <div className="icon-user-circle">
                         <FontAwesomeIcon icon={['fas', 'user-circle']} />
                            <div className="icon-user-circle-content">
                                <a href="#">My Profile</a>
                                <a href="#">My Stats</a>
                                <a href="#">My Galleries</a>
                                <a href="#">My Liked Photos</a>
                                <a href="#">My Setting</a>
                                <a href="#">Managed Photos</a>
                                <a href="#">Support</a>
                                <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                            </div>
                        </div>
                        
                        <div className="user-profile-name">
                                {this.props.currentUser.username}
                            <div className="user-profile-name-content">
                                <a href="#">My Profile</a>
                                <a href="#">My Stats</a>
                                <a href="#">My Galleries</a>
                                <a href="#">My Liked Photos</a>
                                <a href="#">My Setting</a>
                                <a href="#">Managed Photos</a>
                                <a href="#">Support</a>
                                <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                            </div>
                        </div>

                        <div className="icon-telegram-plane">
                            <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
                        </div>

                        <div className="icon-bell">
                            <FontAwesomeIcon icon={['fas', 'bell']}/>
                        </div>

                        <div className="icon-cloud-upload">
                            <FontAwesomeIcon icon={['fas', 'cloud-upload-alt']}  />
                        </div>
                    </div>
                </nav>

                <hgroup className="header-group">
                        <div className="editors-choice">
                        <h2>This week in Editors' Choice:</h2>
                        Gallery by Pixel800
                        </div>
                    {/* <button className="header-button" onClick={logout}>Logout</button> */}
                </hgroup>


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
                            <img srcSet="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Close Up of Leaf" data-image-width="3840" data-image-height="2160" data-big-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                        </div>
                    
                        <div className="baby-picking-leaves">
                            <img srcSet="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Boy in Gray Knit Hat" data-image-width="2048" data-image-height="2476" data-big-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                        </div>
                    </div>

                    <div className="user-body-right">
                        <div className="girl1">
                            <img alt="Lisa" className="Elements__HomefeedPhotoImage-eNfnom-dBEpbj" src="https://drscdn.500px.org/photo/298865833/q%3D80_m%3D1000/v2?user_id=71974091&amp;webp=true&amp;sig=0f710268e7083bb67fa94fbc42a69b52ff4ba1b2f7c23264907931750727fb6d"></img>
                        </div>
                            
                       <div className="user-body-right-icons">               
                            <div className="icon-heart">
                                <FontAwesomeIcon icon={['far', 'heart']} />
                            </div>

                            <div className="icon-comment">
                                <FontAwesomeIcon icon={['far', 'comment']} />
                            </div>

                            <div className="icon-plus-square">
                                <FontAwesomeIcon icon={['far', 'plus-square']} />
                            </div>
                        </div>
                        
                        <div className="korea-hill">
                            <img srcSet="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Cherry Blossoms Tree Near Body of Water" data-image-width="4368" data-image-height="2912" data-big-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/290604/pexels-photo-290604.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                        </div> 

                        <div className="japan-cherry-blosson">
                            <img srcSet="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" className="photo-item__img" alt="Close Up Photography of Cherry Blossom Tree" data-image-width="6000" data-image-height="4000" data-big-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" data-large-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" data-tiny-src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" data-tiny-srcset="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" data-pin-media="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=800" src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"></img>
                        </div>

                        <input type="file" onChange={this.handleFile.bind(this)}/>
                    </div>

                </div>

            </div>
                
    }
};


export default Greeting;



