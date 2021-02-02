import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <div className="title">
        <p className="heading">The Ultimate Developer Tool.</p>
        <p className="heading2">Plan Better. Stay Organized.</p>
      <div className="carousel-container">
        <h4 className="wordCarousel">
        <span>In Sequence:</span>
        <div className="animation-div">
          <ul className="flip4">
            <li className="yellow">Study</li>
            <li className="blue">Plan Projects</li>
            <li className="purple">Network</li>
            <li className="white">Job Search</li>
            </ul>
            </div>
            </h4>
        </div>
        <p className="get-organized">Get Organized</p>
        <p className="arrow">>>></p>
        </div>
    </>
  )
}
