import React from "react";

const Auth = () => {
  return (
    <>
      <div className='form-container'>
        <form>
          <input type="text" placeholder="nombre" />
          <input type="text" placeholder="apellido" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="contraseña" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Auth;
