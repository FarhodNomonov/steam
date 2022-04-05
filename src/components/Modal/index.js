import React from "react";
import { Arrow, Close, Minus, Plus } from "../export";
import Steam1 from "../../assets/img/steam1.png";
import Steam2 from "../../assets/img/steam2.png";
import Steam3 from "../../assets/img/steam3.png";
import Steam4 from "../../assets/img/steam4.png";
import "./modal.css";

function Modal({ setOpen }) {
  const [active, setActive] = React.useState(0);

  const ModalIcon = [
    {
      img: Steam1,
      title: "Введи свой логин Steam",
      svg: <Arrow />,
    },
    {
      img: Steam2,
      title: "Введите сумму пополнения",
      svg: <Arrow />,
    },
    {
      img: Steam3,
      title: "Оплатите удобным методом",
      svg: <Arrow />,
    },
    {
      img: Steam4,
      title: "Получите деньги на Steam баланс",
      //   svg: <Steam1 />,
    },
  ];
  const AccordionData = [
    {
      id: 1,
      title: "Какой-то вопрос",
    },
    {
      id: 2,
      title: "Какой-то вопрос",
    },
    {
      id: 3,
      title: "Какой-то вопрос",
    },
    {
      id: 4,
      title: "Какой-то вопрос",
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
        <ol className="responsive-ul-list-modal">
          {ModalIcon.map((data, i) => {
            return <li key={i}>{data.title}</li>;
          })}
        </ol>
        <div className="modal_question">
          {AccordionData.map((data) => {
            return (
              <div key={data?.id} className="modal_question_card_flex">
                <div
                  key={data?.id}
                  onClick={() => setActive(active !== data?.id ? data?.id : 0)}
                  className="modal_question_card"
                >
                  <p>{data?.title}</p>
                  {active === data?.id ? <Minus /> : <Plus />}
                </div>
                <div
                  className={`modal_question_card_answer ${
                    active === data?.id ? "active" : ""
                  }`}
                >
                  Развернутый ответ на вопрос, который может содержать много
                  слов, букв, возможно ответ будет в 2 строки
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
