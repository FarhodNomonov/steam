import React from "react";
import "./header.css";
import { Faq, Logo, Vk, Telegram } from "./../export/index";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Logo />
      </div>
      <div className="header_icon">
        <Telegram />
        <Vk />
        <Faq />
      </div>
    </div>
  );
}

export default Header;
