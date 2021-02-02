import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  // const authenticatedOptions = (
  //   <>
  //     <Link className="signout-link" onClick={handleLogout} >Sign Out</Link>
     
  //   </>
  // );

  // const unauthenticatedOptions = (
  //   <>
  //     <NavLink className="link" to="/login">
  //       Sign In/Sign Up
  //   </NavLink>
  //   </>
  // );

  // const alwaysOptions = (
  //   <>
  //     <NavLink className="link" to="/studies">
  //       Study
  //   </NavLink>
  //     <NavLink className="link" to="/projects">
  //       Projects
  //   </NavLink>
  //   </>
  // );

  // const Nav = ({ currentUser, }) => {
    // return (
    //   <nav className="nav">
    //     <NavLink className="site-logo" to="/">
    //       In Sequence
    //   </NavLink>
    //   <header> 
    //     {currentUser ? (
    //       <>
    //         <p className="user-greeting">Welcome, {currentUser.username}</p>
    //         <Link className="signout-link"onClick={handleLogout}>Sign Out</Link>
    //       </>
    //     ) : (
    //         <Link className="signin-link" to='/login'>Sign In/Sign Up</Link> 
    //     )}
    //     </header> 
    //     {props.children}
    //   </nav>
    // );
  // };

 }

