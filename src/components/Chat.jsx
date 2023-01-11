import React, { useContext } from "react";
import Vcall from "../img/vcall.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatUser">
          <span>{data.user.displayName}</span>
          <img src={data.user.photoURL} alt="" />
        </div>
        <div className="chatIcons">
          <img src={Vcall} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};

export default Chat;
