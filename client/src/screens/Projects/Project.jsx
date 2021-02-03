import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import './Project.css';

export default function Projects(props) {
  const { projects, currentUser } = props;
  return (
    <div>
        <p className="project-plans">Projects</p>
        <div className="projectcard-container">
      <div className="pr-card-list">
        {projects.map(project => (
          <React.Fragment key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <ProjectCard
                name={project.name}
                image={project.img_url}
              />
            </Link>
          </React.Fragment>
        ))}
            </div>
      </div>
      {currentUser && 
        <Link to="/projects/new"><button button className="pr-add-btn">Add Project</button></Link>
      }
    </div>
  )
}