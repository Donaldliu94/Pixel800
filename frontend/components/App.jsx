import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import {Route} from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/greetings" component={GreetingContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
        </div>
    )
}


export default App;