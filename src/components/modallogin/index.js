import React from "react";
import { Close } from "../export";
import "./modallogin.css";
import Accaunt from "../../assets/img/Аккаунт.png";

function ModalLogin() {
  return (
    <div className="modal_login">
      <div className="modal_icon_close">
        <Close />
      </div>
      <div className="modal_account_img">
        <img src={Accaunt} alt="..." />
      </div>
      <div className="modal_title">
        <p>
          Обратите внимание! Логин, это то, что вы указываете при входе в Steam.
          Если вы укажите неверный логин, то средства уйдут другомупользователю.
        </p>
        <span>взять логин можно тут</span>
      </div>
      <div className="modal_btn">
        <button>Понятно</button>
      </div>
    </div>
  );
}

export default ModalLogin;
