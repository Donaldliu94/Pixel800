import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostFormContainer from '../post/post_form_container';
import Logo from '../../logo/navbar_logo';
import Search from '../search/search'


class Greeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            // uploadForm: false
        };
        // this.handleInput = this.handleInput.bind(this)
        // this.handleFile = this.handleFile.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleInput(field) {
    //     return (e) => {
    //     this.setState({ [field]: e.currentTarget.value })
    //     }
    // }

    // handleFile(e) {
    //     const file = e.currentTarget.files[0];
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({photoFile: file, photoUrl: fileReader.result});
    //     };
    //     if (file) {
    //         fileReader.readAsDataURL(file);
    //     }
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('post[title]', this.state.title)
    //     formData.append('post[description]', this.state.description)
    //     formData.append('post[photographer_id]', this.props.currentUser.id)
    //     formData.append('post[photo]', this.state.photoFile)
    //     this.props.createPost(formData)
    // }

    
    render() {
            if(!this.props.currentUser.username) return null;
            // debugger
            return <div className="profile-layout">


                <nav className="user-nav-bar">
                    <div className="user-nav-bar-left">
                        
                        <div className="user-nav-logo">
                            <a href="/#/homefeed"><Logo/></a>
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
                                {/* <FontAwesomeIcon icon={['fas', 'search']} /> */}
                                {/* <input placeholder="Search for photos, location, or people" ></input> */}
                                <Search/>
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

                        {/* <div className="icon-plus-sign">
                            <span onClick={() => this.setState({ uploadForm: true})}><FontAwesomeIcon icon={['fas', 'plus']} /></span>
                            <div className={this.state.uploadForm ? "" : "upload-form-container-none" }>
                                <div className="modal" onClick={() => this.setState({uploadForm: false})} >
                                </div>
                                <PostFormContainer/>
                            </div>
                        </div> */}

                        <div className="icon-plus-sign">
                            <span onClick={() => this.props.openModal()}><FontAwesomeIcon icon={['fas', 'plus']} /></span>
                            <div className={this.props.modalState ? "" : "upload-form-container-none"}>
                                <div className="modal" onClick={() => this.props.closeModal()} >
                                </div>
                                <PostFormContainer />
                            </div>
                        </div>

                    </div>
                </nav>

                {/* <hgroup className="header-group">
                        <div className="editors-choice">
                        <h2>This week in Editors' Choice:</h2>
                        Gallery by Pixel800: {this.props.currentUser.username}
                        </div>
                </hgroup> */}


                
            </div>
                
    }
};


export default Greeting;



