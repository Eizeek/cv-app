import React from "react";

import "./button.scss";

export const Button = ({ icon, text, label }) => {
  return (
    <button className="button" aria-label={label}>
      {icon && <span className="button__icon">{icon}</span>}
      {text && <span className="button__text">{text}</span>}
    </button>
  );
};
