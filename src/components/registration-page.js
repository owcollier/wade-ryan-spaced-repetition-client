import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './css/registration-page.css'

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the spaced repetition session
    if (props.loggedIn) {
        return <Redirect to="/session" />;
    }
    return (
        <div className="home">
            <RegistrationForm />
            <div className="login-link">
                <Link to="/">Login</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
