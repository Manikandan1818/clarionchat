import React from "react";
import Mani from "../assets/mani.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={Mani} alt="" />
        <span className="username">Manikandan</span>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Navbar;
