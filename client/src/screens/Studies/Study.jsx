import React from 'react';
import { Link } from 'react-router-dom';
import StudyCard from '../../components/StudyCard';
// import Layout from '../../layouts/Layout';

export default function Studies(props) {
  const { studies } = props;
  return (
    // <Layout>
    <div>
      <div className="card-list">
        {studies.map(study => (
          <React.Fragment key={study.id}>
            <Link to={`/studies/${study.id}`}>
              <StudyCard
                title={study.topic}
                image={study.logo_url}
                description={study.description}
                documentation={study.documentation_url}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/studies/new"><button>Add Study</button></Link>
      </div>
    // </Layout>
  )
}
