import React from "react";
import { Arrow, Close, Plus } from "../export";
import Steam1 from "../../assets/img/steam1.png";
import Steam2 from "../../assets/img/steam2.png";
import Steam3 from "../../assets/img/steam3.png";
import Steam4 from "../../assets/img/steam4.png";
import "./modal.css";

function Modal({ setOpen }) {
  const ModalIcon = [
    {
      img: Steam1,
      title: "Введи свой логин Steam",
      svg: <Arrow />,
    },
    {
      img: Steam2,
      title: "Введи свой логин Steam",
      svg: <Arrow />,
    },
    {
      img: Steam3,
      title: "Введи свой логин Steam",
      svg: <Arrow />,
    },
    {
      img: Steam4,
      title: "Введи свой логин Steam",
      //   svg: <Steam1 />,
    },
  ];
  const ModalList = [
    {
      title: "Какой-то вопрос",
      svg: <Plus />,
    },
    {
      title: "Какой-то вопрос",
      svg: <Plus />,
    },
    {
      title: "Какой-то вопрос",
      svg: <Plus />,
    },
    {
      title: "Какой-то вопрос",
      svg: <Plus />,
    },
  ];
  return (
    <div className="center-fixed-modal">
      <div
        className="modal-login-overlay"
        onClick={() => setOpen(false)}
        onContextMenu={() => setOpen(false)}
        onMouseDownCapture={() => setOpen(false)}
      />

      <div className="modal">
        <div className="modal_close_">
          <Close onClick={() => setOpen(false)} />
        </div>
        <div className="modal_icon_flex">
          {ModalIcon.map((data, i) => {
            return (
              <div key={i} className="modal__icon_flex">
                <div className="modal__icon">
                  <img src={data?.img} alt="" />
                  {data?.svg}
                </div>
                <p>{data?.title}</p>
              </div>
            );
          })}
        </div>
        <div className="modal_question">
          {ModalList.map((data, i) => {
            return (
              <div key={i} className="modal_question_card">
                <p>{data?.title}</p>
                {data?.svg}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
