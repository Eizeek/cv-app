import React from "react";
import { Link } from "react-router-dom";
import "./portfolioinfo.scss";

export const PortInfo = ({ title, text, url }) => {
  return (
    <article className="portfolio-info">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        View source
      </Link>
    </article>
  );
};
