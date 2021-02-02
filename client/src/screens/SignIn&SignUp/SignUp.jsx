import { useState } from 'react';
import './SignUp.css';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleSignup } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="signup-container">
    <div className="signup-form">
    <form onSubmit={(e)=> {
      e.preventDefault();
      handleSignup(formData);
    }}>
      <h3 className="h-signup">Sign Up</h3>
      <label>Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Email:
        <input
          type='text'
          name='email'
          value={email}
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
      <input className="signup-btn" type="submit" value="Submit"/>
        </form>
      </div>
      </div>
  )
}
