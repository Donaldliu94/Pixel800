import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    

    render(){
        // debugger
        let leftArray = [];
        let rightArray = [];
        this.props.photos.forEach( (photo, idx) =>{
            // debugger
            if (idx % 2 === 0){
                // debugger
                if (this.props.currentUser.id === photo.photographer_id ){ 
                    // debugger // this is an array iteration. maybe make it a hash map?
                    leftArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users}/>)
                }
                // debugger
            } else{
                // debugger

                if (this.props.currentUser.id === photo.photographer_id ){
                    rightArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)
                }
            }

        });

        // debugger                //this debugger will let you see that initially there is no photos then you will be able to see the photos in an array
        return(

            <div className="profile-header">
                <div className="profile-sub-categories">
                    <div className="sub-categories-photos">
                        PHOTOS
                    </div>
                    <div className="sub-categories-galleries">
                        GALLERIES
                    </div>
                    <div className="sub-categories-groups">
                        GROUPS
                    </div>
                    <div className="sub-categories-about">
                        ABOUT
                    </div>
                </div>


                <div className="list-of-photos">
                    <div className="list-of-photos-left">
                        <ul>
                            {leftArray}
                        </ul>
                    </div>

                    <div className="list-of-photos-right">
                        <ul>
                            {rightArray}
                        </ul>
                    </div>
                </div>
            </div>
        )
        // let photos = this.props.photos.map( (photo, idx) =>{
        //     // return <img className="photos" key={idx} src={photo.photoUrl}></img>
        //     debugger
        //     return <PostIndexItem photo={photo} key={idx} />
        // })

        // // debugger                //this debugger will let you see that initially there is no photos then you will be able to see the photos in an array
        // return(
        //     <div className="list-of-photos">
        //         <ul>
        //             {photos}
        //         </ul>
        //     </div>
        // )
    }


}



export default PostIndex;