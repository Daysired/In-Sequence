import React from 'react';
import { Link } from 'react-router-dom';
import "./Layout.css"
import Nav from "../components/Nav"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
       {/* <Nav
        currentUser={props.currentUser}
      />
    <div className="layout-children">{props.children}</div>   */}

        <header> 
        {currentUser ? (
          <>
            <p className="user-greeting">Welcome, {currentUser.username}</p>
            <Link className="signout-link"onClick={handleLogout}>Sign Out</Link>
          </>
        ) : (
            <Link className="signin-link" to='/login'>Sign In/Sign Up</Link> 
        )}
     </header> 
      {/* <hr /> */}
        {currentUser && (
        <>
          <Link className="studies-link" to='/studies'>Study</Link>
          <Link className="projects-link" to='/projects'>Projects</Link>
        </>
      )} 
      {props.children}   
    </div>
  )
}