import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import StudyCreate from "../screens/Studies/StudyCreate";
import StudyEdit from "../screens/Studies/StudyEdit";
import StudyDetail from "../screens/Studies/StudyDetail";
import Study from "../screens/Studies/Study";
import { deleteStudy, getAllStudies, postStudy, putStudy } from '../services/study';

export default function StudyContainer(props) {
  const [studies, setStudies] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchStudies = async () => {
      const studyData = await getAllStudies();
      setStudies(studyData)
    }
    fetchStudies();
  }, []);

  const handleCreate = async (studyData) => {
    const newStudy = await postStudy(studyData);
    setStudies(prevState => [...prevState, newStudy])
    history.push('/studies')
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
        <ProjectEdit
          projects={projects}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/projects/:id'>
        <ProjectDetail
         projects={projects}
         handleDelete={handleDelete}
        />
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