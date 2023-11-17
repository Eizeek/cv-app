import React, { useState, useEffect, useMemo } from "react";
import "./portfolio.scss";
import { PortInfo } from "./PortInfo/PortInfo";
import { portfolioData } from "../../utils/constants";

export const PortfolioInfos = ({ title }) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const displayData = useMemo(() => {
    return data.filter(
      (item) => item.type === activeTab || activeTab === "all"
    );
  }, [activeTab, data]);

  useEffect(() => {
    setData(portfolioData);
  }, []);
  return (
    <>
      <h3 className="title">{title}</h3>
      <div>
        <ul className="tabs">
          <li
            className={`${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            all
          </li>
          <li
            className={`${activeTab === "ui" ? "active" : ""}`}
            onClick={() => setActiveTab("ui")}
          >
            ui
          </li>
          <li
            className={`${activeTab === "code" ? "active" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            code
          </li>
        </ul>

        <ul className="filter-container">
          {displayData.map((item) => (
            <li
              className={`filter-item ${item.type}`}
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <PortInfo
                title={item.title}
                text={item.description}
                url={item.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
