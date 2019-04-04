import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render(){
        let leftArray = [];
        let rightArray = [];
        this.props.photos.forEach( (photo, idx) =>{
            // debugger
            if (idx % 2 === 0){
                leftArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser}/>)
            } else{
                rightArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser}/>)
            }

        })

        // debugger                //this debugger will let you see that initially there is no photos then you will be able to see the photos in an array
        return(
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