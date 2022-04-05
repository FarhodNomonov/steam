import React from "react";
import { Arrow, Close, Plus } from "../export";
import Steam1 from "../../assets/img/steam1.png";
import Steam2 from "../../assets/img/steam2.png";
import Steam3 from "../../assets/img/steam3.png";
import Steam4 from "../../assets/img/steam4.png";
import "./modal.css";

function Modal() {
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
    <div className="modal">
      <div className="modal_close_">
        <Close />
      </div>
      <div className="modal_icon_flex">
        {ModalIcon.map((data, index) => {
          return (
            <div key={data?.index} className="modal__icon_flex">
              <div className="modal__icon">
                <img src={data?.img} alt="" />
                <p>{data?.title}</p>
              </div>
              {data?.svg}
            </div>
          );
        })}
      </div>
      <div className="modal_question">
        {ModalList.map((data, i) => {
          return (
            <div key={data.i} className="modal_question_card">
              <p>{data?.title}</p>
              {data?.svg}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Modal;
