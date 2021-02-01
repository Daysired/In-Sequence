import React from 'react';

export default function StudyCard(props) {
  const { image, title, description, documentation} = props;
  return (
      <div className="study-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
        <p>{description}</p>
        <p>{documentation}</p>
        
      </div>
  )
}
