import React from "react";
import "./header.css";
import { Faq, Logo, Vk, Telegram } from "./../export";
import Modal from "./../Modal";

function Header() {
  const [FAQ, setFAQ] = React.useState(false);
  document.body.style.overflow = FAQ ? "hidden" : "auto";

  return (
    <div className="header">
      <div className="header_logo">
        <Logo />
      </div>
      <div className="header_icon">
        <Telegram />
        <Vk />
        <Faq onClick={() => setFAQ(true)} />
      </div>
      {FAQ && <Modal setOpen={setFAQ} />}
    </div>
  );
}

export default Header;
