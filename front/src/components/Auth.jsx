import React from "react";

const Auth = () => {
  return (
    <div>
      <form className='form-container'>
        <fieldset>
          <legend>Register here</legend>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter last Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
            />
          </div>
        </fieldset>
      <button type="button" className="btn btn-primary">Send</button>  
      </form>
      
    </div>
  );
};

export default Auth;
