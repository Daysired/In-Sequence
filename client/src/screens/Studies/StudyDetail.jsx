import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import './StudyDetail.css';

import Layout from '../../layouts/Layout';

export default function StudyDetail(props) {
  const [study, setStudy] = useState(null);
  const { studies, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    if (studies.length) {
      const oneStudy = studies.find((study) => study.id === Number(id));
      setStudy(oneStudy)
    }
  }, [studies, id])

  return (
    <Layout>
      <div className="study-details">
        {
          study &&
          <div className="study-card">
            <h3>{study.topic}</h3>
            <img src={study.logo_url} alt={study.topic} />
            <p>{study.description}</p>
            <p>{study.documentation_url}</p>
            <Link to={`/studies/${study.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(study.id)}>Delete</button>
          </div>
        }
      </div>
    </Layout>
  )
}
