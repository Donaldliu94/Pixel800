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
        // debugger
        // const { photos } = this.props;}
        // while (photos.length > 0) {
        //     const val = Math.floor(Math.random() * 3);

        // if (val === 0) {
        //     leftArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} />)
        // }
        // if (val === 1) {
        //     middleArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} />)
        // }
        // if (val === 2) {
        //     rightArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} />)
        // }
        // }



        this.props.photos.forEach( (photo, idx) => {
            const val = Math.floor(Math.random() * 3);
            if (val === 0 ){
                leftArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)
            }
            if (val === 1){
                middleArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)
            }
            if (val === 2){
                rightArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} users={this.props.users} />)                
            }


            // if (idx % 2 === 0){
            //     leftArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} />)
            // }
            // if (idx % 3 === 0){
            //     middleArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} />)
            // }
            // else{
            //     rightArray.unshift(<PostIndexItem photo={photo} key={idx} currentUser={this.props.currentUser} deletePost={this.props.deletePost} />)                
            // }
        });

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