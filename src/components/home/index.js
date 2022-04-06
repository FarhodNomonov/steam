import React from "react";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./home.css";
import {
  Billford,
  Checkbox,
  CheckboxChecked,
  CustomCard,
  Question,
  User,
} from "./../export";
import Viza from "../../assets/img/Visa.png";
import Qiwi from "../../assets/img/Qiwi.png";
import umoney from "../../assets/img/umoney.svg";
import tether from "../../assets/img/tether.svg";
import tron from "../../assets/img/tron.svg";
import ethereum from "../../assets/img/ethereum.svg";
import { CustomCheck } from "./../export";
import ModalLogin from "./../modallogin";
import Modal from "./../Modal/index";

const prices = [
  {
    id: 1,
    price: "100",
  },
  {
    id: 2,
    price: "250",
  },
  {
    id: 3,
    price: "500",
  },
  {
    id: 4,
    price: "2000",
  },
];

function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setPriceState(null);
    setOpenNumber(false);
  };

  const [priceState, setPriceState] = React.useState(null);
  const [openNumber, setOpenNumber] = React.useState(false);
  const [FAQ, setFAQ] = React.useState(false);

  const [openUserLogin, setOpenUserLogin] = React.useState(false);

  document.body.style.overflow = openUserLogin
    ? "hidden"
    : FAQ
    ? "hidden"
    : "auto";

  const CalcPrice = (price) => {
    if (openNumber) {
      const number = parseInt(price);
      return {
        persent:
          Number(((number / 100) * 0.016).toFixed(2)) + Number(priceState),
        payment:
          Number(priceState) +
          Number(
            (
              Number((priceState * 1.1411).toFixed(2)) - Number(priceState)
            ).toFixed(2)
          ),
        comission: (
          Number((priceState * 1.1411).toFixed(2)) - Number(priceState)
        ).toFixed(2),
      };
    } else return 0;
  };

  return (
    <>
      {openUserLogin && <ModalLogin setOpen={setOpenUserLogin} />}
      {FAQ && <Modal setOpen={setFAQ} />}

      <form onSubmit={handleSubmit(onSubmit)} className="home">
        <div className="home_left">
          <h1>Пополни баланс Steam</h1>
          <div className="home_form">
            <div onClick={() => setFAQ(true)} className="home_form_icon">
              <Question />
              <p>Как это работает?</p>
            </div>
            <div className="forma">
              {errors.login && (
                <div className="error-input-text">Введите логин</div>
              )}
              <div className="login">
                <input
                  id="login"
                  {...register("login", { required: true })}
                  type="text"
                  placeholder="Ваш логин"
                  autoComplete="off"
                />
                <label htmlFor="login" className="form_login_flex">
                  <label
                    htmlFor="modal-opener"
                    className="form_login"
                    onClick={() => setOpenUserLogin(true)}
                  >
                    <Question />
                    <p>Где взять логин?</p>
                  </label>
                  <User />
                </label>
              </div>
              {errors.price && (
                <div className="error-input-text">Введите Сумма</div>
              )}
              <label className="price_">
                <input
                  placeholder="Сумма пополнения"
                  {...register("price", { required: true })}
                  onChange={(e) => setPriceState(e.target.value)}
                  value={priceState > 0 ? priceState : ""}
                  type="number"
                />
                <Billford />
              </label>
              <div className="radio_price">
                {prices.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="input_radio"
                      onClick={() => setPriceState(item?.price)}
                    >
                      {priceState === item?.price ? (
                        <CustomCheck />
                      ) : (
                        <CustomCard />
                      )}

                      <p>{`${item?.price}Р`}</p>
                    </div>
                  );
                })}
              </div>
              <label className="checkbox_inp">
                <input
                  {...register("oferta", { required: true })}
                  type="checkbox"
                />
                <div className="d-grid-checkbox">
                  <Checkbox className="default-checkbox" />
                  <CheckboxChecked className="checked-checkbox" />
                </div>
                <p>
                  Нажимая на кнопку, я даю согласие на обработку персональных
                  данных
                </p>
              </label>
              {errors.oferta && (
                <div className="error-input-text">
                  Подтвердите согласие на обработку персональных данных
                </div>
              )}
              <div className="home_right respons-min">
                <p>Выберите способ оплаты</p>
                <div className="master_card" style={{ marginBottom: "20px" }}>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <label
                        className="card_"
                        style={{ width: "100%" }}
                        onClick={() => setOpenNumber(true)}
                      >
                        <input
                          type="radio"
                          value={"viza"}
                          {...register("card", { required: true })}
                          name="card"
                        />
                        <span></span>
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={Viza}
                          alt="..."
                        />
                      </label>
                    </SwiperSlide>
                    <SwiperSlide>
                      <label
                        className="card_"
                        style={{ width: "100%" }}
                        onClick={() => setOpenNumber(true)}
                      >
                        <input
                          type="radio"
                          value={"qiwi"}
                          {...register("card", { required: true })}
                          name="card"
                        />
                        <span></span>
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={Qiwi}
                          alt="..."
                        />
                      </label>
                    </SwiperSlide>
                    <SwiperSlide>
                      <label
                        className="card_"
                        style={{ width: "100%" }}
                        onClick={() => setOpenNumber(true)}
                      >
                        <input
                          type="radio"
                          value={"ethereum"}
                          {...register("card", { required: true })}
                          name="card"
                        />
                        <span></span>
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={ethereum}
                          alt="..."
                        />
                      </label>
                    </SwiperSlide>
                    <SwiperSlide>
                      <label
                        className="card_"
                        style={{ width: "100%" }}
                        onClick={() => setOpenNumber(true)}
                      >
                        <input
                          type="radio"
                          value={"tron"}
                          {...register("card", { required: true })}
                          name="card"
                        />
                        <span></span>
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={tron}
                          alt="..."
                        />
                      </label>
                    </SwiperSlide>
                    <SwiperSlide>
                      <label
                        className="card_"
                        style={{ width: "100%" }}
                        onClick={() => setOpenNumber(true)}
                      >
                        <input
                          type="radio"
                          value={"tether"}
                          {...register("card", { required: true })}
                          name="card"
                        />
                        <span></span>
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={tether}
                          alt="..."
                        />
                      </label>
                    </SwiperSlide>
                    <SwiperSlide>
                      <label
                        className="card_"
                        style={{ width: "100%" }}
                        onClick={() => setOpenNumber(true)}
                      >
                        <input
                          type="radio"
                          value={"umoney"}
                          {...register("card", { required: true })}
                          name="card"
                        />
                        <span></span>
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={umoney}
                          alt="..."
                        />
                      </label>
                    </SwiperSlide>
                  </Swiper>
                  {errors.card && (
                    <div className="error-input-text">
                      Выберите способ оплаты
                    </div>
                  )}
                </div>
              </div>
              <button className="button-linear" type="submit">
                Пополнить
              </button>
            </div>
            <div className="home_price">
              <div className="home_price_flex">
                <p>Заплатите:</p>
                <p>
                  {isNaN(Number(CalcPrice(priceState).payment))
                    ? 0
                    : Number(CalcPrice(priceState).payment).toFixed(2) ===
                      "0.00"
                    ? 0
                    : Number(CalcPrice(priceState).payment).toFixed(2)}
                  {"  "}Р
                </p>
              </div>
              <div className="home_price_flex">
                <p>Получите на баланс Steam:</p>
                <p>
                  {isNaN(Number(CalcPrice(priceState).persent))
                    ? 0
                    : Number(CalcPrice(priceState).persent)}
                  {"  "}Р
                </p>
              </div>
              <div className="home_price_flex">
                <p>Комиссия:</p>
                <p>
                  {isNaN(CalcPrice(priceState).comission)
                    ? 0
                    : CalcPrice(priceState).comission === "0.00"
                    ? 0
                    : CalcPrice(priceState).comission}{" "}
                  Р
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_right">
          <p>Выберите способ оплаты</p>
          <div className="master_card">
            <div className="master_card_flex">
              <label className="card_" onClick={() => setOpenNumber(true)}>
                <input
                  type="radio"
                  value={"viza"}
                  {...register("card", { required: true })}
                  name="card"
                />
                <span></span>
                <img src={Viza} alt="..." />
              </label>
              <label className="card_" onClick={() => setOpenNumber(true)}>
                <input
                  type="radio"
                  value={"qiwi"}
                  {...register("card", { required: true })}
                  name="card"
                />
                <span></span>
                <img src={Qiwi} alt="..." />
              </label>
            </div>
            <div className="master_card_flex">
              <label className="card_" onClick={() => setOpenNumber(true)}>
                <input
                  type="radio"
                  value={"ethereum"}
                  {...register("card", { required: true })}
                  name="card"
                />
                <span></span>
                <img src={ethereum} alt="..." />
              </label>
              <label className="card_" onClick={() => setOpenNumber(true)}>
                <input
                  type="radio"
                  value={"tron"}
                  {...register("card", { required: true })}
                  name="card"
                />
                <span></span>
                <img src={tron} alt="..." />
              </label>
            </div>
            <div className="master_card_flex">
              <label className="card_" onClick={() => setOpenNumber(true)}>
                <input
                  type="radio"
                  value={"tether"}
                  {...register("card", { required: true })}
                  name="card"
                />
                <span></span>
                <img src={tether} alt="..." />
              </label>
              <label className="card_" onClick={() => setOpenNumber(true)}>
                <input
                  type="radio"
                  value={"umoney"}
                  {...register("card", { required: true })}
                  name="card"
                />
                <span></span>
                <img src={umoney} alt="..." />
              </label>
            </div>
            {errors.card && (
              <div className="error-input-text">Выберите способ оплаты</div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default Home;
