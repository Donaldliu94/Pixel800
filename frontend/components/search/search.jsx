import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const msp = (state) => {
    // debugger
    return({
        posts: state.entities.posts,
        photos: Object.values(state.entities.posts) 
    })
}



const mdp = (dispatch) => {
    // debugger
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
        // debugger
        // this.props.fetchPosts();
    }



    handleInput(e) {
        this.setState({ searchInput: e.target.value });
    }

    matches(){
        // debugger
        const matches = [];
        if (this.state.searchInput.length === 0){
            return [];
        }
        if (this.props.photos){ 
            this.props.photos.forEach( (photo) => {
                if (photo.title.includes(this.state.searchInput) ){
                    // this.setState({id: photo.id })
                    debugger
                    matches.push({title: photo.title, id: photo.id } )
                }
            });


            if (matches.length === 0) {
                matches.push( {title: "Unable to find photo"});
            }

            return matches;
        }
    }

    selectName(event){
        // const name = event.currentTarget.innerText;
        // debugger
        const resultId = parseInt(event.target.value)
        this.setState( {searchInput: "" });
        this.props.history.push(`/pictures/${resultId}`)
    }
    

    render() {
        // debugger
        const results = this.matches().map( (result, i) => {
            // debugger
            return (
                <li key={i} value={result.id} onClick={this.selectName}>{result.title}</li>
            )
        })

        return(
            <div className="auto">
                <FontAwesomeIcon icon={['fas', 'search']} />
                <input 
                onChange={this.handleInput}
                value={this.state.searchInput}
                placeholder="Search for photos, location, or people "/>
                <ul className="auto-list">
                    {results}
                </ul>
            </div>
        )
    }

}


export default withRouter(connect(msp, mdp)(Search));