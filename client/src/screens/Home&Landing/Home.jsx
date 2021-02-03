import './Home.css';
import { Link } from 'react-router-dom';

import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="home-headings">
      <p className="h1">Get Organized.</p>
      <p className="h2">Stay Organized.</p>
      </div>
      <div className="home-containers">
        <Link className="st-container" to='/studies'>
          <img src='https://i.imgur.com/QtFuZbl.png' />
          <p className="st">Study</p>
        </Link>
        <Link className="pr-container" to='/projects'>
          <img src='https://i.imgur.com/aKQyzwC.png' />
          <p className="pr">Projects</p>
        </Link>
        <Link className="nt-container">
          <img src='https://i.imgur.com/6y1DsPB.png' />
          <p className="nt">Network</p>
        </Link>
        <Link className="js-container">
          <img src='https://i.imgur.com/qpx4aBj.png' />
          <p className="js">Job Search</p>
        </Link>
      </div>
    </div>
  )
}
