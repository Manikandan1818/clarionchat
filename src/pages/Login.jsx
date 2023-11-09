import React from "react";
import clarion from "../assets/clarion.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="logo" src={clarion} alt="" />
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
