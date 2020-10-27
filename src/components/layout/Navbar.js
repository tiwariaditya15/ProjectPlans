import React from 'react';
import { Link } from 'react-router-dom'; 
import SignedInLinks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';
import { connect } from 'react-redux';
function Navbar(props){
        const { auth } = props;
        console.log(auth);
        return (
            <nav className="nav-wrapper grey darken-4">
                    <div className="container row">
                            <Link to="/" className="brand-logo">Projects Plan</Link>
                            { auth.uid ? <SignedInLinks /> : <SignedOutLinks /> }
                    </div>
            </nav>
        );
}

const mapStateToProps = ( state ) => {
        console.log(state);
        return {
                auth: state.firebase.auth
        }
};
export default connect(mapStateToProps)(Navbar);
