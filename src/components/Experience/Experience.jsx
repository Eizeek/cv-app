import "../../assests/styles/Experience.scss";
import { experienceData } from "../../utils/constants";

export default function Experience({ title }) {
  const events = experienceData.map((data, index) => (
    <div className="experience__item" key={index}>
      <div className="experience__date">
        <h3>{data.info.company}</h3>
        <p>{data.date}</p>
      </div>
      <div className="experience__info">
        <h3 className="experience__title">{data.info.job}</h3>
        <p className="experience__content">{data.info.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <h3 className="title">{title}</h3> <div>{events}</div>
    </>
  );
}
