import React from 'react';

export default function ProjectCard(props) {
  const { name, image, description, deployed, stack} = props;
  return (
      <div className="card">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>{description}</p>
        <p>{deployed}</p>
        <p>{stack}</p>
        
      </div>
  )
}