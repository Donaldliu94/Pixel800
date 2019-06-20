import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const msp = (state) => {
    return({
        posts: state.entities.posts,
        photos: Object.values(state.entities.posts) 
    })
}



const mdp = (dispatch) => {
    return({
        fetchPosts: () => dispatch(fetchPosts())
    })

}



class Search extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            searchInput: "",
            id: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.selectName = this.selectName.bind(this);
    }


    componentDidMount(){
        // this.props.fetchPosts();
    }



    handleInput(e) {
        this.setState({ searchInput: e.target.value });
    }

    matches(){
        const matches = [];
        if (this.state.searchInput.length === 0){
            return [];
        }
        if (this.props.photos){ 
            this.props.photos.forEach( (photo) => {
                if (photo.title.includes(this.state.searchInput) ){
                    // this.setState({id: photo.id })
                    matches.push({title: photo.title, id: photo.id } )
                }
            });


            if (matches.length === 0) {
                matches.push( {title: "Unable to find photo", id: -1});
            }

            return matches;
        }
    }

    selectName(event){
        // const name = event.currentTarget.innerText;
        // if (event.target.innerHTML === "Unable to find photo"){ return null;}
        const resultId = parseInt(event.target.value);
        this.setState( {searchInput: "" });
        this.props.history.push(`/pictures/${resultId}`);

    }
    

    render() {
        const results = this.matches().map( (result, i) => {
            return (
                <li key={i} 
                value={result.id} 
                    onClick={result.title === "Unable to find photo" ? null : this.selectName}>{result.title}</li>
            )

        })

        return(
            <div className="auto">
                <FontAwesomeIcon icon={['fas', 'search']} />
                <input 
                onChange={this.handleInput}
                value={this.state.searchInput}
                placeholder="Search for photos by title"/>
                <ul className="auto-list">
                    {results}
                </ul>
            </div>
        )
    }

}


export default withRouter(connect(msp, mdp)(Search));