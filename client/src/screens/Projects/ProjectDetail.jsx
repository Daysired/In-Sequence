import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import Layout from '../../layouts/Layout';

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
    <Layout>
      <div className="project-details">
        {
          project &&
          <div className="project-card">
            <h3>{project.name}</h3>
            <img src={project.img_url} alt={project.name} />
            <p>{project.description}</p>
            <p>{project.deployed_url}</p>
            <p>{project.stack}</p>
            <Link to={`/projects/${project.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </div>
        }
      </div>
    </Layout>
  )
}
