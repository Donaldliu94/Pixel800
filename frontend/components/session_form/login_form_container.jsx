import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';



const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign up</Link>
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)