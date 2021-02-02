import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  const alwaysOptions = (
    <>
      <NavLink className="link" to="/studies">
        Study
    </NavLink>
      <NavLink className="link" to="/projects">
        Projects
    </NavLink>
    </>
  );

    return (
      <nav className="nav">
        <NavLink className="site-logo" to="/">
          In Sequence
      </NavLink>
      <div> 
        {currentUser ? (
          <>
            <p className="link-welcome">Welcome, {currentUser.username}</p>
            <Link className="signout-link"onClick={handleLogout}>Sign Out</Link>
          </>
        ) : (
            <Link className="signin-link" to='/login'>Sign In/Sign Up</Link> 
            )}
          {alwaysOptions}
        </div> 
      </nav>
    );
  };



