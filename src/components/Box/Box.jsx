import "./Box.css";

import React from "react";

function Box({ title, content }) {
  return (
    <div className="box">
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
    </div>
  );
}

export default Box;
