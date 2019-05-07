import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';




const PostIndexItem = ({photo, currentUser, deletePost, users, createLike, deleteLike, likes}) => {



    // let userLikes = photo.like_ids.map( (like) => {
    //     return likes[like].user_id
    // })

    let userLikes;
    for(let i = 0; i < photo.like_ids.length; i++){
        if (currentUser.like_ids.includes(photo.like_ids[i])){
            userLikes = true
            break;
        } else{
            userLikes = false
        }
    }

    debugger

    // let userDeleteId = photo.like_ids.map( (id) => {
    //     if(currentUser.like_ids.includes(id)){
    //         return id
    //     }
    // })

    let userDeleteId = photo.like_ids.filter( (id) => {
        if(currentUser.like_ids.includes(id)){
            return id
        }
    })
    

    return(
        <>
        <div className="PostIndexItem-photo">
            <div>
                {/* <img className="photos" src={photo.photoUrl} alt={photo.title} /> */}
                {/* <span onClick={() => }><img className="photos" src={photo.photoUrl} alt={photo.title}></img></span> */}
                    <Link to={`/pictures/${photo.id}`}><img src={photo.photoUrl} className="photos"/></Link>
            </div>

            <div className="PostIndexItem-photo-attributes">
                <div className="icon-heart">
                    { userLikes ? 
                        // <span onClick={ () => deleteLike(userDeleteId[0])} className="unlike-heart"><FontAwesomeIcon icon={['far', 'heart']} /></span> 
                        <span onClick={ () => deleteLike(userDeleteId[0])} className="unlike-heart"><FontAwesomeIcon icon={['fas', 'heart']} /></span> 
                        :
                        <span onClick={ () => createLike(photo.id)} className="liked-heart"><FontAwesomeIcon icon={['far', 'heart']} /></span>
                    }  
                </div>

                <div className="heart-count">
                    {photo.like_ids.length}
                </div>

                <div className="icon-comment">
                    <FontAwesomeIcon icon={['far', 'comment']} />
                </div>

                <div className="icon-plus-square">
                    <FontAwesomeIcon icon={['far', 'plus-square']} />
                </div>

                {/* <div className="icon-times-symbol">
                        // <span onClick={() => deletePost(photo.id)}><FontAwesomeIcon icon={['fas', 'times']} /></span>
                </div> */}
            </div>
            <div className="PostIndexItem-photo-title">
                {photo.title}
            </div>
            <div className="PostIndexItem-photo-username">
                    by {photo.postUsername} • {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][photo.created_at.slice(5, 7) - 1]  + " " + photo.created_at.slice(8, 10) + ", " + photo.created_at.slice(0, 4)}
                    {/* if (currentUser.id === photo.photographer_id){
                        by {currentUser.username} • {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][photo.created_at.slice(5, 7) - 1]  + " " + photo.created_at.slice(8, 10) + ", " + photo.created_at.slice(0, 4)}
                    } */}
            </div>

        </div>    
        </>
    )}


export default PostIndexItem