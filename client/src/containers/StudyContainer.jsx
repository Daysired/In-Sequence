import { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
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

  const handleUpdate = async (id, studyData) => {
    const updatedStudy = await putStudy(id, studyData);
    setStudies(prevState => prevState.map(studyItem => {
      return studyItem.id === Number(id) ? updatedStudy : studyItem
    }))
    history.push('/studies')
  }

  const handleDelete = async (id) => {
    await deleteStudy(id);
    setStudies(prevState => prevState.filter(studyItem => {
      return studyItem.id !== id
    }))
  }

  return (
    <Switch>
       <Route path='/studies/new'>
        <StudyCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/studies/:id/edit'>
        {currentUser ? <StudyEdit
          currentUser={currentUser}
          studies={studies}
          handleUpdate={handleUpdate}
        /> : <Redirect to="/login" />}
      </Route>
      <Route path='/studies/:id'>
        {currentUser ? <StudyDetail
          currentUser={currentUser}
          studies={studies}
          handleDelete={handleDelete}
        /> : <Redirect to="/login" />}
      </Route>
      <Route path='/studies'>
        <Study
          studies={studies}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}