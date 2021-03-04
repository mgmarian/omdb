import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [input, setInput] = React.useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = input
    axios.post(`http://localhost:3000/api/users/login`, {email, password})
    .then(res => console.log(res))
  }

  return (
    <div>
      <form  onSubmit={handleSubmit} className="form-container" >
        <fieldset>
          <legend>Please, enter your account info</legend>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
            onChange={handleChange}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
            onChange={handleChange}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Enter
        </button>
        <Link to='/register'>
        <button type="text" className="btn btn-primary">
          I don't have an account
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
