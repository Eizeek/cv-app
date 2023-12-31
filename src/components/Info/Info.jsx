import React from "react";
import { useNavigate } from "react-router-dom";

import "./Info.scss";

export default function Info() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/portfolio");
  };
  return (
    <>
      <div className="info__content">
        <h3>Aziz Karimov</h3>
        <p>Programmer. Creative. Innovator</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo <br /> ligula eget dolor. Aenean massa. Cum sociis natoque
        </p>
        <button className="info__btn" onClick={handleButtonClick}>
          Know More
        </button>
      </div>
    </>
  );
}
