import React from 'react';
import GreetingContainer from './greeting/greeting_container.jsx';
import SplashContainer from './splash/splash_container';
import {Route} from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import PostFormContainer from './post/post_form_container.jsx';
import PostIndex from './post/post_index_container';
import PhotoDetailContainer from './photo/photo_detail_container';
import HomeFeedContainer from './home_feed/home_feed_container';

library.add(fab, fas, far)




const App = () => {
    return (
        <div>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/home" component={GreetingContainer} />
            <ProtectedRoute path="/homefeed" component={GreetingContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <ProtectedRoute exact path="/home/posts/create" component={PostFormContainer} />
            <ProtectedRoute path="/home" component={PostIndex} />
            <ProtectedRoute exact path="/pictures/:postId" component={PhotoDetailContainer} />
            {/* <ProtectedRoute exact path="homefeed/pictures/:postId" component={PhotoDetailContainer} /> */}
            {/* <ProtectedRoute exact path="home/pictures/:postId" component={PhotoDetailContainer} /> */}
            <ProtectedRoute exact path="/homefeed" component={HomeFeedContainer}/>
        </div>
    )
}


export default App;