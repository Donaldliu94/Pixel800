import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class PostForm extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            title: "",
            description: "",
            photoFile: null,
            photoUrl: "",
            uploaded: false,
            view: 0,
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result, uploaded: true});     // you want to put uploaded:true here because if you put that code below, once you upload photo it would re-render and then jump to the render code below, and therefore you wouldn't hit this line, and don't have access to photoUrl.
        };
        if (file) {             //when the file gets uploaded, the file becomes true and will call the fileReader.onloadened
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[description]', this.state.description);
        formData.append('post[photographer_id]', this.props.currentUser.id);
        formData.append('post[photo]', this.state.photoFile);
        formData.append('post[view]', this.state.view);
        debugger
        
        this.props.createPost(formData);
        this.props.closeModal();
        this.setState({
            title: "",
            description: "",
            photoFile: null,
            photoUrl: "",
            uploaded: false,

        });
    }


    // state.uploaded : false 
    // 
    render() {
        // this.state.uploaded ? 

        return this.state.uploaded ?  
            <div className="uploading-picture-form1">

                <div className="uploading-picture-form1-left">
                    {/* STICK PREVIEW AND UPLOAD HERE */}
                    <div className="uploading-picture-form1-left-preview">
                        <img className="preview-photo" src={this.state.photoUrl}></img>
                    </div>
                    <div className="uploading-picture-form1-left-upload">
                        <label htmlFor="files" className="fake-upload-form-btn-2">
                            <FontAwesomeIcon icon={['fas', 'plus']} /> 
                            <div>Change photo</div>  
                            <input type="file" className="upload-form-btn" onChange={this.handleFile} id="files" />
                            </label>
                    </div>
                </div>

                    <form onSubmit={ () => this.handleSubmit()} >           {/* this isn't needed  */}
                        <div className="uploading-picture-form1-right">
                            <button onClick={this.handleSubmit}>Submit</button>

                            <label htmlFor="title">Title</label>
                            <input type="text" className="uploading-picture-title" id="title" value={this.state.title} onChange={this.handleInput("title")} />
                            
                            <label htmlFor="description">Description</label>
                            <input type="text" className="uploading-picture-description" id="description" value={this.state.description} onChange={this.handleInput("description")} />
                           
                        </div>
                    </form>
            </div>
            :
            <div className="uploading-picture-form2">
                <div>
                    <form onSubmit={ () => this.handleSubmit}>      
                        <label htmlFor="files" className="fake-upload-form-btn-1">Select Photos
                            <input type="file" className="upload-form-btn" onChange={this.handleFile} accept="image/x-png, image/jpeg, image/jpg" id="files"/>
                        </label>
                    </form>
                </div>
            </div>
    }
}


export default PostForm;






