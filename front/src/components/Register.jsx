import React from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const Auth = () => {
  const [input, setInput] = React.useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, lastname, email, password} = input
    axios.post(`http://localhost:3000/api/users/register`, {name, lastname, email, password})
    .then(() =>console.log('creadoo'))

    history.push("/");
    
    //dispatch(registerUser(input));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <fieldset>
          <legend>Register here</legend>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputlastname1">Last Name</label>
            <input
              name="lastname"
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter last Name"
            />
          </div>
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
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
          Send
        </button>
        <Link to='/login'>
        <button type="text" className="btn btn-primary">
          I already have an account
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Auth;
