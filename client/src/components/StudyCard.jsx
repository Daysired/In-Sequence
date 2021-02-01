import React from 'react';

export default function StudyCard(props) {
  const { topic, logo_url, description, documentation_url} = props;
  return (
      <div className="card">
        <h3>{topic}</h3>
        <img src={logo_url} alt={topic} />
        <p>{description}</p>
        <p>{documentation_url}</p>
        
      </div>
  )
}
