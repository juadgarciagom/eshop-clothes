import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";

import "../header/header.scss";

//Current user refers to de root reducer and then the user referes to the user reducer when we have the current user
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const Header = ({ currentUser }) => {
    
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Header);
