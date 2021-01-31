import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <header>
        <h1>In Sequence</h1>
        <Link to='/login'>SignIn</Link>
        <Link to='/signup'>SignUp</Link>
      </header>
      {props.children}
    </div>
  );
};

export default Layout;