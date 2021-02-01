import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layouts/Layout';

export default function StudyEdit(props) {
  const [formData, setFormData] = useState({
    topic: "",
    logo_url: "",
    description: "",
    documentation_url: ""
  });
  const { topic, logo_url, description, documentation_url } = formData;
  const { handleUpdate, studies } = props;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const oneStudy = studies.find(study => {
        return study.id === Number(id);
      })
      const { topic, logo_url, description, documentation_url } = oneStudy;
      setFormData({ topic, logo_url, description, documentation_url });
    }
    if (studies.length) {
      prefillFormData()
    }
  }, [studies, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleUpdate(id, formData);
        }}>
          <h3>Edit Study</h3>
          <label>Topic:
            <input
              type="text"
              name="topic"
              value={topic}
              onChange={handleChange}
            />
          </label>
          <label>Logo Url:
            <input
              type="text"
              name="logo_url"
              value={logo_url}
              onChange={handleChange}
            />
          </label>
          <label>Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          <label>Documentation:
            <input
              type="text"
              name="documentation_url"
              value={documentation_url}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}
