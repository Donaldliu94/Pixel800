import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PostFormContainer from '../post/post_form_container';
import Logo from '../../logo/navbar_logo';
import Search from '../search/search'
import CommentItem from '../comment/comment_item';

class PhotoDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // title: "",
            // description: "",
            // photoFile: null,
            // view: 0,
            body: "",
        };
        // this.fromHome = true
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {                                            //what was the point of this? is it needed?
        // this.props.fetchUsers().then( () => this.props.fetchPost(this.props.match.params.postId) )
        const that = this;
        this.props.fetchPost(this.props.match.params.postId).then( (result) => {
            result.post.view = result.post.view + 1;
            that.props.updatePost(result);
        });
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.path !== "/home") {
    //         this.fromHome = false;
    //         console.log(this.fromHome)
    //     }

    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    // }


    mouseOver() {
        document.getElementById("followings").innerHTML = "Unfollow"
        document.getElementById("followings").style.color = "#2986F7";
    }

    mouseLeave() {
        document.getElementById("followings").innerHTML = "Following"        
        document.getElementById("followings").style.color = "black"        
        document.getElementById("followings").style.cursor = "pointer"
    }


    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        let formData = new FormData();
        formData.append('comment[body]', this.state.body);
        formData.append('comment[post_id]', this.props.match.params.postId);
        
        this.props.createComment(formData);
        this.setState({
            body: "",
        });
    }

    render(){
        if (this.props.photo === undefined) return null;            //this is to fix the problem when you refresh from show page to show page
        let photo = this.props.photo;
        let views = this.props.photo.view;
        let title = photo.title;
        let photoUrl = photo.photoUrl;
        let comments = this.props.comments;

        // let x = console.log(window.location.href);
        let photoCreatedAt = photo.created_at;
        let currentUser = this.props.currentUser;
        let users = this.props.users;
        let deletePhoto = 
            <span onClick={() => {
                this.props.deletePost(photo.id).then(() => this.props.history.push("/home"))
            }}><FontAwesomeIcon icon={['far', 'trash-alt']} /></span>

        let goBack = 
            <span onClick={() => {
                this.props.history.goBack();
            }}><FontAwesomeIcon icon={['fas', 'times']} className="photo-detail-exit" /></span>

        if (this.props.photo.photographer_id !== this.props.currentUser.id){
            deletePhoto = null;
        }


        let userLikes;
        for (let i = 0; i < photo.like_ids.length; i++) {
            if (currentUser.like_ids.includes(photo.like_ids[i])) {
                userLikes = true
                break;
            } else {
                userLikes = false
            }
        }


        let userDeleteId = photo.like_ids.filter((id) => {
            if (currentUser.like_ids.includes(id)) {
                return id
            }
        })

        let userfollows;
        if (currentUser.followed_ids.includes(photo.photographer_id)){
            userfollows = true
        } else {
            userfollows = false
        }

        let photoFollow;
        if (photo.photographer_id === currentUser.id){ 
            photoFollow = <div>by {photo.postUsername} • <span className="ownPhotoFollow"> {currentUser.follower_ids.length} followers</span></div> 
        } else{
            photoFollow = 
                userfollows ?
                    <div>by { photo.postUsername } • <span onClick={() => this.props.deleteFollow(photo.photographer_id)} className="following" id="followings" onMouseOver={() => this.mouseOver()} onMouseLeave={() => this.mouseLeave()}>Following</span> </div > 
                    :
                    <div>by {photo.postUsername} • <span onClick={() => this.props.createFollow(photo.photographer_id)} className="follow">Follow</span> </div>
        }


        let photoComments = [];

        // for(let i = 0; i < Object.keys(comments).length; i++){
        //     if (comments.post_id === photo.id){
        //         photoComments.concat(comment)
        //     }
        // }


        for (var keys in comments) {
            let comment = comments[keys];
            
            if (comment.post_id === photo.id) {
                photoComments.push(<CommentItem key={keys} comment={comment} deleteComment={this.props.deleteComment}/>)   //can i use key={keys} here because, keys will always be unique?
            }
        }


        let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, Math.ceil(photoComments.length / 10));



        // if (this.props.match.path )
        // if (photo !== undefined) {

            return(
                <div>
                    <nav className="photo-detail-nav-bar">
                        <div className="user-nav-bar-left">

                            <div className="user-nav-logo">
                                <a href="/"><Logo/></a>
                            </div>

                            <div className="user-nav-discover">
                                Discover
                            </div>


                            <div className="user-ellipsis">
                                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                                <div className="user-ellipsis-content">
                                    <a href="http://donald-liu.me" target="_blank">Personal Site</a>
                                    <a href="https://www.linkedin.com/in/donald-liu/" target="_blank">LinkedIn</a>
                                    <a href="https://github.com/donaldliu94" target="_blank">GitHub</a>
                                    <a href="https://angel.co/donald-liu-1" target="_blank">AngelList</a>
                                    {/* <a href="#">Blog</a> */}
                                    {/* <a href="#">Licensing</a> */}
                                    {/* <a href="#">Studio</a> */}
                                    {/* <a href="#">Terms</a> */}
                                    {/* <a href="#">Privacy</a> */}
                                </div>
                            </div>
                        </div>

                        <div className="user-nav-bar-right">
                            <form >
                                <label className="search">
                                    {/* <FontAwesomeIcon icon={['fas', 'search']} />
                                    <input placeholder="Search for photos, location, or people" ></input> */}
                                    <Search/>
                                </label>
                            </form>

                            <div className="icon-user-circle">
                                <FontAwesomeIcon icon={['fas', 'user-circle']} />
                                <div className="icon-user-circle-content">
                                    <a href="#">My Profile</a>
                                    {/* <a href="#">My Stats</a>
                                    <a href="#">My Galleries</a>
                                    <a href="#">My Liked Photos</a>
                                    <a href="#">My Setting</a>
                                    <a href="#">Managed Photos</a>
                                    <a href="#">Support</a> */}
                                    <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                                </div>
                            </div>

                            <div className="user-profile-name">
                                {this.props.currentUser.username}
                                <div className="user-profile-name-content">
                                    <a href="#">My Profile</a>
                                    {/* <a href="#">My Stats</a>
                                    <a href="#">My Galleries</a>
                                    <a href="#">My Liked Photos</a>
                                    <a href="#">My Setting</a>
                                    <a href="#">Managed Photos</a>
                                    <a href="#">Support</a> */}
                                    <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                                </div>
                            </div>

                            <div className="icon-telegram-plane">
                                {/* <FontAwesomeIcon icon={['fab', 'telegram-plane']} /> */}
                            </div>

                            <div className="icon-bell">
                                {/* <FontAwesomeIcon icon={['fas', 'bell']} /> */}
                            </div>

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


                    <div className="post-detail-page">
                        { goBack }
                        {/* <Link to="/home"><FontAwesomeIcon icon={['fas', 'times']} className="photo-detail-exit"/></Link> */}
                        
                        <div className="post-detail-top">
                            <div className="post-detail-picture">
                            {/* <div></div> put an X here if you want the X to be inside the picture, and do position absolute */}
                                <img src={photoUrl} alt={title} className="single-photo" />
                            </div>
                        </div>

                        <div className="post-detail-bottom">

                            <div className="post-detail-bottom-inner">
                                <div className="post-detail-bottom-left">
                                
                                    <div className="PostIndexItem-photo-attributes">
                                        {/* <div className="icon-heart">
                                            <FontAwesomeIcon icon={['far', 'heart']} />
                                        </div> */}

                                        <div className="icon-heart">
                                            {userLikes ?
                                                // <span onClick={ () => deleteLike(userDeleteId[0])} className="unlike-heart"><FontAwesomeIcon icon={['far', 'heart']} /></span> 
                                                <span onClick={() => this.props.deleteLike(userDeleteId[0])} className="unlike-heart"><FontAwesomeIcon icon={['fas', 'heart']} /></span>
                                                :
                                                <span onClick={() => this.props.createLike(photo.id)} className="liked-heart"><FontAwesomeIcon icon={['far', 'heart']} /></span>
                                            }
                                        </div>

                                        <div className="heart-count">
                                            {photo.like_ids.length}
                                        </div>

                                        <div className="icon-times-symbol">
                                            {deletePhoto}
                                        </div>

                                        <div className="icon-comment">
                                            {/* <FontAwesomeIcon icon={['far', 'comment']} /> */}
                                        </div>

                                        <div className="icon-plus-square">
                                            {/* <FontAwesomeIcon icon={['far', 'plus-square']} /> */}
                                        </div>

                                        
                                    </div>

                                    <div className="photo-detail-topline">
                                        <div className="photo-detail-topline-left">
                                            <div className="PostIndexItem-photo-title">
                                                <div className="post-detail-title">{title}</div>
                                            </div>
                                            <div className="PostIndexItem-photo-username">
                                                <div className="photo-detail">
                                                
                                                {photoFollow}

                                                {/* {userfollows ?
                                                        <div>by {photo.postUsername} • <span onClick={() => this.props.deleteFollow(photo.photographer_id)} className="following" id="followings" onMouseOver={ () => this.mouseOver() } onMouseLeave={ () => this.mouseLeave() }>Following</span> </div> 
                                                        :
                                                        <div>by {photo.postUsername} • <span onClick={() => this.props.createFollow(photo.photographer_id)} className="follow">Follow</span> </div> 
                                                } */}

                                                    {/* <div>by {photo.postUsername} • {currentUser.follower_ids.length} followers </div>  */}

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="photo-detail-user-icon"><FontAwesomeIcon icon={['fas', 'user-circle']} /></div>
                                    </div>

                                    <div className="PostIndexItem-photo-date">
                                        <FontAwesomeIcon icon={['far', 'calendar-alt']}/> &nbsp; {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][photoCreatedAt.slice(5, 7) - 1] + " " + photoCreatedAt.slice(8, 10) + ", " + photoCreatedAt.slice(0, 4)}
                                    </div>


                                    <div className="Pulse-Views-Popular">
                                        <div className="Pulse">
                                            <div className="PVP-word">Pulse</div>
                                            <div className="PVP-number">{parseFloat((photo.like_ids.length * 8.8 + (views * 0.8) + photo.comment_ids.length + 4.4).toFixed(1))}</div>
                                        </div>
                                        <div className="Views">
                                            <div className="PVP-word">Views</div>
                                            <div className="PVP-number">{views}</div>
                                        </div>
                                        <div className="Popular">
                                            <div className="PVP-word">Popular</div>                    
                                            <FontAwesomeIcon icon={['fas', 'star']} /> 
                                        </div>

                                    </div>

                                    <div className="camera-specs">
                                        <div className="camera-specs-camera-icon"><FontAwesomeIcon icon={['fas', 'camera']} /> &nbsp; Canon EOS 5D</div>
                                        <div className="camera-specs-aperture"><FontAwesomeIcon icon={['fas', 'bolt']}/> 14.0-24.0 mm f/2.8</div>
                                        <FontAwesomeIcon icon={['fas', 'sliders-h']} />  &nbsp; 21mm ƒ/16 1s ISO 100
                                    </div>
{/* 
                                    <div className="post-detail-category">
                                        <div>Category Uncategorized</div>
                                    </div> */}


                                </div>

                                    <div className="post-detail-bottom-right">
                                        <div className="photo-detail-comment-number">{photoComments.length} Comments</div>
                                        <div className="photo-detail-adding-comment">
                                            <div className="photo-detail-add-comment-user-icon"><FontAwesomeIcon icon={['fas', 'user-circle']} /></div>

                                            <div className="outer-add-comment-box">
                                                <form onSubmit={ () => this.handleSubmit()}>
                                                    <input type="text" placeholder="Add a comment" className="inner-add-comment-box" value={this.state.body} onChange={this.handleInput("body")}></input>
                                                    <button onClick={this.handleSubmit}>Submit</button>
                                                </form>
                                            </div>
                                        </div>

                                        <div>
                                            <ul>
                                                {photoComments}
                                            </ul>  
                                        </div>

                                        <div>
                                            {/* {pagination} */}
                                        </div>
                                    </div> 

                                <div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )
        // } else {
            // return <div>ERROR</div>          //redirect to home page
        // }             

    }




}



export default PhotoDetail;


// {
//     prev : {
//         id : 77,
//         photoURL : "/photos/21312930123.jpg"
//     },
//     current : {
//         id: 79,
//         photoURL : "/photos/213164564563.jpg"
//     },
//     next : {
//         id: 80,
//         photoURL : "/photos/4564565123.jpg"
//     },
// }