import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  const alwaysOptions = (
    <>
      <Link className="study-link" to="/studies">
        Study
    </Link>
      <Link className="project-link" to="/projects">
        Projects
    </Link>
    </>
  );

    return (
      <nav className="nav">
        <NavLink className="site-logo" to="/">
          <img src='https://i.imgur.com/ziS6dc4.png'/>
      </NavLink>
        <div className="welcome-signout"> 
        {currentUser ? (
          <>
            <p className="link-welcome">Welcome, {currentUser.username}</p>
            <Link className="signout-link"onClick={handleLogout}>SignOut</Link>
          </>
        ) : (
            <Link className="signin-link" to='/login'>SignIn</Link> 
            )}
          {alwaysOptions}
        </div> 
      </nav>
    );
  };



