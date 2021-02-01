import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layouts/Layout';

export default function ProjectEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    description: "",
    deployed_url: "",
    stack: "",
  });
  const { name, img_url, description, deployed_url, stack } = formData;
  const { handleUpdate, projects } = props;
  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const oneProject = projects.find((project) => {
        return project.id === Number(id);
      })
      const { name, img_url, description, deployed_url, stack } = oneProject;
      setFormData({ name, img_url, description, deployed_url, stack });
    }
    if (projects.length) {
      prefillFormData()
    }
  }, [projects, id])


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
          <label>Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>Image Url:
            <input
              type="text"
              name="img_url"
              value={img_url}
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
          <label>Deployed Url:
            <input
              type="text"
              name="deployed_url"
              value={deployed_url}
              onChange={handleChange}
            />
          </label>
          <label>Stack:
            <input
              type="text"
              name="stack"
              value={stack}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}