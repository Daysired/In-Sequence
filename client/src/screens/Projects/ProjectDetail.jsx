import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import './ProjectDetail.css';

export default function ProjectDetail(props) {
  const [project, setProject] = useState(null);
  const { projects, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    if (projects.length) {
      const oneProject = projects.find((project) => project.id === Number(id));
      setProject(oneProject)
    }
  }, [projects, id])

  return (
      <div className="project-details">
        {
          project &&
          <div className="pr-detail-card">
            <img className="pr-detail-img" src={project.img_url} alt={project.name} />
            <h3 className="pr-name">{project.name}</h3>
            <p className="pr-description">Description: {project.description}</p>
            <p className="pr-deployed">Deployed Url: {project.deployed_url}</p>
            <p className="pr-stack">Stack: {project.stack}</p>
            <Link to={`/projects/${project.id}/edit`}><button className="pr-detail-edit">Edit</button></Link>
            <button className="pr-detail-delete"onClick={() => handleDelete(project.id)}>Delete</button>
          </div>
        }
      </div>
  )
}
