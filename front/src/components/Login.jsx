import React from "react";
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {sendLoginRequest} from '../store/loginUser'
import Error from './Error'

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = React.useState({});

  const user = useSelector(state => state.loginUser);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    //const {email, password} = input
    dispatch(sendLoginRequest(input))
    //.then(res => res.data)
    // history.push("/users");
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
          {user.error && user.error ? <Error/> : null}
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
