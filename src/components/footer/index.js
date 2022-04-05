import React, { useRef } from "react";
import "./footer.css";

function Footer() {
  const [scrolled, setScrolled] = React.useState(0);
  const container = useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      container.current.scrollLeft += 100;
    }, 1000);
  }, [scrolled]);

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
    <div
      className="footer"
      onClick={() => setScrolled(scrolled + 100)}
      ref={container}
    >
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
