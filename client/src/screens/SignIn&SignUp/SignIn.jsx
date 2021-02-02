import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Sign In</h3>
      <label className="signin-label">Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/signup'>Sign Up</Link>
      <button>Submit</button>
    </form>
  )
}
