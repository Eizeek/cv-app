import "./Box.scss";
import React from "react";

function Box({ title, content }) {
  return (
    <div className="box" id="about">
      <h3 className="box__title">{title}</h3>
      <p className="box__content">{content}</p>
    </div>
  );
}

export default Box;
