import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../logo/navbar_logo';


class SessionForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {username: "", password: "", isValid: true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }


    update(field) {
        
        return(
            e => this.setState({[field]: e.currentTarget.value})
        );
    }

    resetValidState(){
        return (
            e => this.setState({ isValid: true })
        );
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/homefeed"), error => this.setState({ isValid: false }));
        
    }


    handleDemo(e){
        e.preventDefault();
        const demo = Object.assign({}, {username:"Employer", password:"password"})
        this.props.processForm(demo).then( () => this.props.history.push("/homefeed"))
    }

    renderErrors() {
        return (
            <div className={this.state.isValid ? "error-messages" : "error-messages error"}>
                    {this.props.errors.map((error, i) => (
                        <p key={i}>{error}</p>
                    ))}
            </div>
        )
    }


    render() {

        let topRightBtn = <div className="signup-btn"> {this.props.navLink} </div>;
        if (this.props.formType === "Sign up"){
            topRightBtn = <div className="login-btn"> {this.props.navLink} </div>;
        }  

        let demoUser = <div>
            Don't have an account? &nbsp; {this.props.navLink} &nbsp; or &nbsp; <span className="demo-link" onClick={this.handleDemo}>Demo User </span>
        </div> 
        if (this.props.formType === "Sign up"){
            demoUser = <div>
                Already have an account? &nbsp; {this.props.navLink}
            </div>
        } 
        // else if (this.props.formType === 'Log In') {
        //     const demoUser = <div>
        //         Don't have an account? &nbsp; {this.props.navLink} &nbsp; or &nbsp; <span className="demo-link" onClick={this.handleDemo}>Demo User </span>
        //     </div> 
        // }

        // if (this.props.formType === "Log In"){
            return(
                <div className="login-page">
                    {this.renderErrors()}
                    <nav className ="login-nav-bar">
                        <div className="login-nav-bar-left">
                            <div className="nav-logo-session-logo">
                                <a href="/"><Logo/></a>
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
                            {topRightBtn}
                        </div>
                    </nav>
                    <div className="login-flex">
                        
                        <div className = "login-form-container">
                            <div className = "login-Pixel800">
                                {this.props.formType + " to Pixel800"}
                            </div> 
                            <form onSubmit ={this.handleSubmit} className="login-form-box">
                                <div className={ this.state.isValid ? "login-form" : "login-form error"}>
                                    <label>Username: 
                                        <br/>
                                        <input type="text" value={this.state.username} onChange={this.update("username")} onClick={this.resetValidState()} className="login-input"/>
                                    </label>

                                    <label>Password: 
                                        <br/>
                                            <input type="password" value={this.state.password} onChange={this.update("password")} onClick={this.resetValidState()} className="login-input"/>
                                    </label>
                                    <input type="submit" value={this.props.formType} className="session-submit"/>
                                </div>
                            </form>
                            <div style={{ height:'170px' }}></div>
                            
                            <div className="no-account">
                                {demoUser}
                                {/* Don't have an account? &nbsp; {this.props.navLink} &nbsp; or &nbsp; <span className="demo-link" onClick={this.handleDemo}>Demo User </span> */}
                                {/* { this.props.formType === 'Sign up' ? 
                                    (<div>
                                        Already have an account? &nbsp; {this.props.navLink}
                                    </div>
                                    ) : (
                                        <div>
                                            Don't have an account? &nbsp; {this.props.navLink} &nbsp; or &nbsp; <span className="demo-link" onClick={this.handleDemo}>Demo User </span>
                                        </div> 
                                    )
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        // } 
        // else {
        //     return (
        //         <div className="login-page">
        //             {this.renderErrors()}
        //             <nav className="login-nav-bar">
        //                 <div className="login-nav-bar-left">
        //                     <div className="nav-logo">
        //                         <a href="/">Pixel800</a>
        //                     </div>
        //                     <div className="nav-discover-logo">
        //                         Discover
        //                     </div>
        //                     <div className="nav-about-logo">
        //                         About
        //                     </div>
        //                     <div className="nav-studio-logo">
        //                         Studio
        //                     </div>
        //                 </div>

        //                 <div className="login-nav-bar-right">
        //                     {topRightBtn}
        //                 </div>
        //             </nav>
        //             <div className="login-flex">

        //                 <div className="login-form-container">
        //                     <div className="login-Pixel800">
        //                         {this.props.formType + " to Pixel800"}
        //                     </div>
        //                     <form onSubmit={this.handleSubmit} className="login-form-box">
        //                         <div className={this.state.isValid ? "login-form" : "login-form error"}>
        //                             <label>Username:
        //                                 <br />
        //                                 <input type="text" value={this.state.username} onChange={this.update("username")} onClick={this.resetValidState()} className="login-input" />
        //                             </label>

        //                             <label>Password:
        //                                 <br />
        //                                 <input type="password" value={this.state.password} onChange={this.update("password")} onClick={this.resetValidState()} className="login-input" />
        //                             </label>
        //                             <input type="submit" value={this.props.formType} className="session-submit" />
        //                         </div>
        //                     </form>
        //                     <div style={{ height: '170px' }}></div>
        //                     <div className="no-account">
        //                         Already have an account? &nbsp; {this.props.navLink}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }
    }
}



export default SessionForm

