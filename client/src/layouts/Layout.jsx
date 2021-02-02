import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={handleLogout}>Sign Out</button>
          </>
        ) : (
            <Link to='/login'>Sign In/Sign Up</Link> 
        )}
      </header>
      {/* <hr /> */}
      {currentUser && (
        <>
          <Link to='/studies'>Study</Link>
          <Link to='/projects'>Projects</Link>
        </>
      )}
      {props.children}
    </div>
  )
}