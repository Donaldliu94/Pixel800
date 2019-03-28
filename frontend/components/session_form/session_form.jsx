import React from 'react';
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    update(field) {
        return(
            e => this.setState({[field]: e.currentTarget.value})
        );
    }


    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/"));
    }

    

    render() {
        return(
            <div className= "login-page">
                <nav className ="login-nav-bar">
                    <div className="login-nav-bar-left">
                        <div className="nav-logo">
                            <a href="/">Pixel800</a>
                        </div>
                        <div className="nav-discover-logo">
                            Discover
                        </div>
                        <div className="nav-about-logo">
                            About
                        </div>
                        <div className="nav-studio-logo">
                            Studio
                        </div>
                    </div>

                    <div className="login-nav-bar-right">
                        <div className="login-signup">
                            {this.props.navLink}
                        </div>
                    </div>

                </nav>
                
                <div className = "login-form-container">
                    <div className = "login-Pixel800">
                        {this.props.formType + " to Pixel800"}
                    </div> 
                    <form onSubmit ={this.handleSubmit} className="login-form-box">
                        <br/>
                        <br/>
                        {/* {this.renderErrors()} */}
                        <div className="login-form">
                            <br/>
                            <label>Email or Username: 
                                <br/>
                                <input type="text" value={this.state.username} onChange={this.update("username")} className="login-input"/>
                            </label>
                            <br/>
                            <label>Password: 
                                <br/>
                                <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input"/>
                            </label>
                            <br/>
                            <input type="submit" value={this.props.formType} className="session-submit"/>
                        </div>

                    </form>
                    <div className="no-account">
                        Don't have an account? &nbsp; {this.props.navLink}
                    </div>
                </div>
            </div>
        )
    }
}



export default SessionForm