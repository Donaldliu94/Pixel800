import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router-dom'


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/greetings" />
        )
    )}/>
);



const Protected = ({component: Component, path, loggedIn, exact}) => (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        )}/>
);


const msp = ({session}) => {
    return ({
        loggedIn: Boolean(session.id)
    });
};


export const ProtectedRoute = withRouter(connect(msp, null)(Protected));

export const AuthRoute = withRouter(connect(msp, null)(Auth));