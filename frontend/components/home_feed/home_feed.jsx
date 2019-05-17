import React from 'react';
import PostIndexItem from '../post/post_index_item';



class HomeFeed extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    
    render(){
        let leftArray = [];
        let middleArray = [];
        let rightArray = [];
        let combineArray = [leftArray, middleArray, rightArray]
        
        let idx = 0; 
        let i = 0;
        while (idx < this.props.photos.length) {
            const photo = this.props.photos[idx];
            if (i === combineArray.length) {
                i = 0;
            }
            combineArray[i].unshift((<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} createLike={this.props.createLike} deleteLike={this.props.deleteLike} likes={this.props.likes}/>));
            i++;
            idx++;
        }


        //keith 
        // const left = [];
        // const mid = [];
        // const right = [];

        // const photos = this.props.photos.slice(0);

        // while (photos.length > 0) {
        //     if (photos.length > 0) left.unshift(makePhotoComponent(photos.shift()));
        //     if (photos.length > 0) mid.unshift(makePhotoComponent(photos.shift()));
        //     if (photos.length > 0) right.unshift(makePhotoComponent(photos.shift()));
        // }

                
        // this.props.photos.forEach( (photo, idx) => {
        //     const val = Math.floor(Math.random() * 3);
        //     if (val === 0 ){
        //         // if ( leftArray.length <= middleArray.length && leftArray.length <= rightArray.length ){
        //             leftArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)
        //         // }
        //     }
        //     if (val === 1){
        //         // if (middleArray.length <= leftArray.length && middleArray.length <= rightArray.length ){
        //             middleArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)
        //         // }
        //     }
        //     if (val === 2){
        //         // if (rightArray.length <= leftArray.length && rightArray.length <= middleArray.length){
        //             rightArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)                
        //         // }
        //     }
        // });

        return(
            <div className="list-of-photos">
                <div className="list-of-photos-left">
                    <ul>
                        {leftArray}
                    </ul>
                </div>

                <div className ="list-of-photos-right">
                    <ul>
                        {middleArray}
                    </ul>
                </div>

                <div className="list-of-photos-right">
                    <ul>
                        {rightArray}
                    </ul>
                </div>
            </div>
        )

    }


}


export default HomeFeed;