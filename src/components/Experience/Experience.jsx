import "./Experience.css";

export default function Experience({ title }) {
  const experienceData = [
    {
      date: "2013-2014",
      info: {
        company: "Google",
        job: "Front-end developer / php programmer",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      },
    },
    {
      date: "2012-2013",
      info: {
        company: "Twitter",
        job: "Web developer",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      },
    },
    {
      date: "2013-2014",
      info: {
        company: "Google",
        job: "Front-end developer / php programmer",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      },
    },
  ];
  const events = experienceData.map((data, index) => (
    <div className="exp" key={index}>
      <div className="exp-date">
        <h3>{data.info.company}</h3>
        <p>{data.date}</p>
      </div>
      <div className="exp-info">
        <h3 className="exp-title">{data.info.job}</h3>
        <p className="exp-content">{data.info.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <h3 className="title">{title}</h3> <div>{events}</div>
    </>
  );
}
