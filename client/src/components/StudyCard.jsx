import React from 'react';

export default function StudyCard(props) {
  const { title, image, description, documentation} = props;
  return (
      <div className="card">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
        <p>{documentation}</p>
        
      </div>
  )
}
