import React from 'react';

export default function ProjectCard(props) {
  const { name, img_url, description, deployed_url, stack} = props;
  return (
      <div className="card">
        <h3>{name}</h3>
        <img src={img_url} alt={name} />
        <p>{description}</p>
        <p>{deployed_url}</p>
        <p>{stack}</p>
        
      </div>
  )
}