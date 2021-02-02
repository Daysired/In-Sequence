import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import StudyCard from '../../components/StudyCard';
import './Study.css';


export default function Studies(props) {
  const { studies, currentUser } = props;
  return (
   
    <div className="background-p">
      <div className="card-list">
        {studies.map(study => (
          <React.Fragment key={study.id}>
            <Link to={`/studies/${study.id}`}>
              <StudyCard
                image={study.logo_url}
                title={study.topic}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      {currentUser &&
        <Link to="/studies/new"><button>Add Study</button></Link>  
      }
    </div>
    
  )
}
