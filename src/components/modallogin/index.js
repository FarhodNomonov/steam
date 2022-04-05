import React from "react";
import { Close } from "../export";
import "./modallogin.css";
import Accaunt from "../../assets/img/Аккаунт.png";

function ModalLogin({ setOpen }) {
  return (
    <div className="center-fixed-modal">
      <div
        className="modal-login-overlay"
        onClick={() => setOpen(false)}
        onContextMenu={() => setOpen(false)}
        onMouseDownCapture={() => setOpen(false)}
      />
      <div className="modal_login-body">
        <div className="modal_icon_close">
          <Close onClick={() => setOpen(false)} />
        </div>
        <div className="modal_account_img">
          <img src={Accaunt} alt="..." />
        </div>
        <div className="modal_title">
          <p>
            Обратите внимание! Логин, это то, что вы указываете при входе в
            Steam. Если вы укажите неверный логин, то средства уйдут
            другомупользователю.
          </p>
          <span>
            <a
              href="https://store.steampowered.com/login/?redir=account%2F&redir_ssl=1"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              взять логин можно тут
            </a>
          </span>
        </div>
        <div>
          <button
            className="button-linear modal_btn"
            onClick={() => setOpen(false)}
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
