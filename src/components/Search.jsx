import React from "react";
import Mani from "../assets/mani.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="" />
      </div>
      <div className="userChat">
        <img src={Mani} alt="" />
        <div className="userChatInfo">
          <span>Mani</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
