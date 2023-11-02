import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assests/styles/Port.css";
import { useMemo } from "react";
import { portData } from "../../utils/constants";

export default function Port({ collapsed, title }) {
  const [data, setData] = useState(portData);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setData(data);
  }, [data]);

  const displayData = useMemo(() => {
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
          {displayData.map((item) => (
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
