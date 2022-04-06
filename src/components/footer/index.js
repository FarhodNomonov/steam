import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40,
      ].map((data) => {
        return (
          <div key={data} className="footer_main">
            <p>nickname***</p>
            <p>пополнил на 304Р</p>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
