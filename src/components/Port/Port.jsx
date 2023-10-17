import React, { useEffect, useState } from "react";
import portfolioData from "./../../data/portfolio.json";
import { Link } from "react-router-dom";
import "./Port.css";
import { useMemo } from "react";

export default function Port({ collapsed, title }) {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setData(portfolioData);
  }, []);

  const dispayData = useMemo(() => {
    return data.filter(
      (item) => item.type === activeTab || activeTab === "all"
    );
  }, [activeTab, data]);

  return (
    <>
      <h3 className="title">{title}</h3>
      <div className={`container ${collapsed ? "collapsed" : null}`}>
        <ul className="tabs">
          <li
            className={`tabs-item ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </li>
          <li
            className={`tabs-item ${activeTab === "ui" ? "active" : ""}`}
            onClick={() => setActiveTab("ui")}
          >
            Ui
          </li>
          <li
            className={`tabs-item ${activeTab === "code" ? "active" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </li>
        </ul>

        <section className="portfolio">
          {dispayData.map((item) => (
            <article key={item.id} className="portfolio-item">
              <div
                className="image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link to={item.link} target="_blank">
                View source
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
