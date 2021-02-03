import { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import ProjectCreate from "../screens/Projects/ProjectCreate";
import ProjectEdit from "../screens/Projects/ProjectEdit";
import ProjectDetail from "../screens/Projects/ProjectDetail";
import Project from "../screens/Projects/Project";
import { deleteProject, getAllProjects, postProject, putProject } from '../services/project';

export default function ProjectContainer(props) {
  const [projects, setProjects] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getAllProjects();
      setProjects(projectData)
    }
    fetchProjects();
  }, []);

  const handleCreate = async (projectData) => {
    const newProject = await postProject(projectData);
    setProjects(prevState => [...prevState, newProject])
    history.push('/projects')
  }

  const handleUpdate = async (id, projectData) => {
    const updatedProject = await putProject(id, projectData);
    setProjects(prevState => prevState.map(projectItem => {
      return projectItem.id === Number(id) ? updatedProject : projectItem
    }))
    history.push('/projects')
  }

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects(prevState => prevState.filter(projectItem => {
      return projectItem.id !== id
    }))
  }

  return (
    <Switch>
       <Route path='/projects/new'>
        <ProjectCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/projects/:id/edit'>
        {currentUser ? <ProjectEdit
          currentUser={currentUser}
          projects={projects}
          handleUpdate={handleUpdate}
        /> : <Redirect to="/login" />}
      </Route>
      <Route path='/projects/:id'>
        {currentUser ? <ProjectDetail
          currentUser={currentUser}
          projects={projects}
          handleDelete={handleDelete}
        /> : <Redirect to="/login" />}
      </Route>
      <Route path='/projects'>
        <Project
          projects={projects}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}
