import React from "react";
import "./footer.css";

function Footer() {
  const DataTitle = [
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
    {
      title: "nickname***",
      price: "пополнил на 304Р",
    },
  ];
  return (
    <div className="footer">
      {DataTitle.map((data, i) => {
        return (
          <div key={i} className="footer_main">
            <p>{data.title}</p>
            <p>{data.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
