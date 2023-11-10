import React from "react";

import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Manikandan</span>
        <div className="chatIcons">
          <VideoCameraFrontIcon fontSize="medium" />
          <PersonAddIcon fontSize="medium" />
          <MoreHorizIcon fontSize="medium" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
