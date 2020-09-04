import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Navbar = ({ user, auth }) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                {auth.uid ? <SignedInLinks initials={ user && user.initials } /> :
                    <SignedOutLinks />}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // const users = state.firestore.data.users;
    // const user = users && users[state && state.firebase.auth.uid];
    return {
        user: state.firebase.profile,
        auth: state.firebase.auth,
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{
    collection: 'users'
}]))(Navbar);