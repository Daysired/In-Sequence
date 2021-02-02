import React, { useState } from 'react'
import Layout from '../../layouts/Layout';
import '.ProjectCreate.css';

export default function ProjectCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    description: "",
    deployed_url: "",
    stack: "",
  });
  const { name, img_url, description, deployed_url, stack } = formData;
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
          <h3>Create Project</h3>
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
          <label>Descripton:
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