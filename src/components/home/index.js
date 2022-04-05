import React from "react";
import { useForm } from "react-hook-form";
import "./home.css";
import { Billford, Question, User } from "./../export/index";
import Viza from "../../assets/img/Visa.png";
import Qiwi from "../../assets/img/Qiwi.png";
import ModalLogin from "../modallogin";

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="home">
      <div className="home_left">
        <h1>Пополни баланс Steam</h1>
        <div className="home_form">
          <div className="home_form_icon">
            <Question />
            <p>Как это работает?</p>
          </div>
          <div className="forma">
            <label className="login">
              <input
                {...register("login", { required: true })}
                type="text"
                placeholder="Ваш логин"
              />
              <div className="form_login_flex">
                <div className="form_login">
                  <Question />
                  <p>Где взять логин?</p>
                </div>
                <User />
              </div>
            </label>
            <label className="price_">
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Сумма пополнения"
              />
              <Billford />
            </label>
            <label className="radio_price">
              <div className="input_radio">
                <input type="radio" />
                <p>100Р</p>
              </div>
              <div className="input_radio">
                <input type="radio" />
                <p>250Р</p>
              </div>
              <div className="input_radio">
                <input type="radio" />
                <p>500Р</p>
              </div>
              <div className="input_radio">
                <input type="radio" />
                <p>2000Р</p>
              </div>
            </label>
            <label className="checkbox_inp">
              <input type="checkbox" />
              <p>
                Нажимая на кнопку, я даю согласие на обработку персональных
                данных
              </p>
            </label>
            <button type="submit">Пополнить</button>
          </div>
          <div className="home_price">
            <div className="home_price_flex">
              <p>Заплатите:</p>
              <div className="home_price_border"></div>
              <p>0 Р</p>
            </div>
            <div className="home_price_flex">
              <p>Получите на баланс Steam:</p>
              <div className="home_price_border"></div>
              <p>0 Р</p>
            </div>
            <div className="home_price_flex">
              <p>Комиссия:</p>
              <div className="home_price_border"></div>
              <p>0 Р</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_right">
        <p>Выберите способ оплаты</p>
        <div className="master_card">
          <div className="master_card_flex">
            <label className="card_">
              <input type="radio" />
              <img src={Viza} alt="..." />
            </label>
            <label className="card_">
              <input type="radio" />
              <img src={Qiwi} alt="..." />
            </label>
          </div>
          <div className="master_card_flex">
            <label className="card_">
              <input type="radio" />
              <img src={Viza} alt="..." />
            </label>
            <label className="card_">
              <input type="radio" />
              <img src={Qiwi} alt="..." />
            </label>
          </div>
          <div className="master_card_flex">
            <label className="card_">
              <input type="radio" />
              <img src={Viza} alt="..." />
            </label>
            <label className="card_">
              <input type="radio" />
              <img src={Qiwi} alt="..." />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Home;
