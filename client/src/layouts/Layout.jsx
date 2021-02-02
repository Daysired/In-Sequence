import React from 'react';
import { Link } from 'react-router-dom';
import "./Layout.css"
import Nav from "../components/Nav"

export default function Layout(props) {
  return (
    <div>
       <Nav
        currentUser = { props.currentUser }
        handleLogout= { props.handleLogout }
      />
    <div className="layout-children">{props.children}</div>  
       </div>
      )
}