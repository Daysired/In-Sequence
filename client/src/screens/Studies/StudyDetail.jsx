import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom'
import './StudyDetail.css';

export default function StudyDetail(props) {
  const [study, setStudy] = useState(null);
  const { studies, handleDelete} = props;
  const { id } = useParams();

  useEffect(() => {
    if (studies.length) {
      const oneStudy = studies.find((study) => study.id === Number(id));
      setStudy(oneStudy)
    }
  }, [studies, id])

  return (
    <div className="study-details">
      {
        study &&
        <div className="detail-card">
          <img className="detail-img" src={study.logo_url} alt={study.topic} />
          <h3 className="st-topic">{study.topic}</h3>
          <p className="st-description">Description: {study.description}</p>
          <p className="st-doc">Documentation: {study.documentation_url}</p>
          <Link to={`/studies/${study.id}/edit`}><button className="detail-edit">Edit</button></Link>
          <button className="detail-delete" onClick={() => handleDelete(study.id)}>Delete</button>
          
        </div>
      }
    </div>   
      
        
  )
}
