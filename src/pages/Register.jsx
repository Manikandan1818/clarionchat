import React, { useState } from "react";
import clarion from "../assets/clarion.png";
import Avatar from "../assets/camera-icon.png";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="logo" src={clarion} alt="" />
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Avatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {error && <span>Something went wrong!</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
