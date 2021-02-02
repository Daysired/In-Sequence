import React, { useState } from 'react'
import Layout from '../../layouts/Layout';
import './StudyCreate.css';

export default function StudyCreate(props) {
  const [formData, setFormData] = useState({
    topic: "",
    logo_url: "",
    description: "",
    documentation_url: ""
  });
  const { topic, logo_url, description, documentation_url } = formData;
  const { handleCreate } = props;

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
          handleCreate(formData);
        }}>
          <h3>Create Study</h3>
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
          <label>Descripton:
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
              name="documentation"
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