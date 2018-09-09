import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <hr />

                    <Route exact path='/signin' component={SignInPage} />
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/account' component={AccountPage} />
                </div>
            </BrowserRouter> 
        )
    }
}

export default App;