import "./Feedback.scss";

export default function Feedback({ title }) {
  const feedbackData = [
    {
      user: {
        pic: "https://randomuser.me/api/portraits/men/34.jpg",
        name: "Monkey D. Luffy",
        site: "https://example.com",
        comment:
          "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      },
    },
    {
      user: {
        pic: "https://randomuser.me/api/portraits/men/34.jpg",
        name: "Tony Chopper",
        site: "https://example.com",
        comment:
          "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      },
    },
    {
      user: {
        pic: "https://randomuser.me/api/portraits/men/34.jpg",
        name: "Roronoa Zoro",
        site: "https://example.com",
        comment:
          "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      },
    },
  ];

  const events = feedbackData.map((data, index) => (
    <div className="feedback__item" key={index}>
      <p className="feedback__item-comment">{data.user.comment}</p>
      <div className="feedback__item_user">
        <img className="feedback__item_user-pic" src={data.user.pic} alt="" />
        <span className="feedback__item_user-name">{data.user.name}</span>{" "}
        <a className="feedback__item_user-site" href={data.user.site}>
          {data.user.site}
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <h3 className="title">{title}</h3>
      <div>{events}</div>;
    </>
  );
}
