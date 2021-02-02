import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import './Project.css';

export default function Projects(props) {
  const { projects } = props;
  return (
    <div>
      <div className="card-list">
        {projects.map(project => (
          <React.Fragment key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <ProjectCard
                name={project.name}
                image={project.img_url}
                description={project.description}
                deployed={project.deployed_url}
                stack={project.stack}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/projects/new"><button>Add Project</button></Link>
    </div>
  )
}