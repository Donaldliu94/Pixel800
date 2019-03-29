import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash';



const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login">Log In</Link>
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)