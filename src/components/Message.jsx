import React from "react";
import Mani from "../assets/mani.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Mani} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello, Mani</p>
        <img src={Mani} alt="" />
      </div>
    </div>
  );
};

export default Message;
