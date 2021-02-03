import React from 'react';

export default function ProjectCard(props) {
  const { name, image, description, deployed, stack} = props;
  return (
      <div className="project-card">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
        <p>{description}</p>
        <p>{deployed}</p>
        <p>{stack}</p>
        
      </div>
  )
}