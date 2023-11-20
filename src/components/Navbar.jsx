import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Mani from "../assets/mani.jpg";

import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={Mani} alt="" />
        <span className="username">Manikandan</span>
      </div>
      <button onClick={() => signOut(auth)}>
        <PowerSettingsNewIcon fontSize="medium" />
      </button>
    </div>
  );
};

export default Navbar;
