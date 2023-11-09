import React from "react";
import clarion from "../assets/clarion.png";
import Avatar from "../assets/camera-icon.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="logo" src={clarion} alt="" />
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Avatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
