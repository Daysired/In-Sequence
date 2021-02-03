import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <div className="title">
        <p className="heading">The Ultimate Developer Tool.</p>
        <p className="heading2">Plan Better. Stay Organized.</p>
      <div className="carousel-container">
        <p className="wordCarousel">
        <span>In Sequence:</span>
        <div className="animation-div">
          <ul className="flip4">
            <li className="yellow">Study</li>
            <li className="blue">Plan Projects</li>
            <li className="purple">Network</li>
            <li className="white">Job Search</li>
            </ul>
            </div>
            </p>
        </div>
        <p className="get-organized">Get Organized</p>
        <Link className="arrow" to="/home">>>></Link>
        </div>
    </>
  )
}
