// import "./Box.css";
import "../../assests/styles/Box.scss";
import React from "react";

function Box({ title, content }) {
  return (
    <div className="box">
      <h3 className="box__title">{title}</h3>
      <p className="box__content">{content}</p>
    </div>
  );
}

export default Box;
