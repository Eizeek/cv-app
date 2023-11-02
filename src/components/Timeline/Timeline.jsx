import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducationData } from "../../redux/slices/education/educationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import "../../assests/styles/Timeline.scss";

export default function Timeline({ title }) {
  const dispatch = useDispatch();
  const educationData = useSelector((state) => state.education.data);
  const isLoading = useSelector((state) => state.education.loading);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, [dispatch]);

  const events = educationData.map((data, index) => (
    <div className="edu" key={index}>
      <div className="edu-date">
        <p>{data.date}</p>
        <hr className="hr" />
      </div>
      <div className="edu-info">
        <h3 className="edu-title">{data.title}</h3>
        <p className="edu-content">{data.text}</p>
      </div>
    </div>
  ));

  return (
    <>
      <h3 className="title">{title}</h3>{" "}
      <div className="timeline-container">
        {isLoading === "pending" ? (
          <div className="timeline-loading">
            <FontAwesomeIcon size="xl" icon={faRotate} spin />
          </div>
        ) : (
          <div className="timeline-events">{events}</div>
        )}
      </div>
    </>
  );
}
