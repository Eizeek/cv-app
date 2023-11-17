import Avatar from "../../components/Avatar/Avatar";
import Info from "../../components/Info/Info";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="content">
          <Avatar
            className="avatar"
            style={{
              marginLeft: "8rem",
              width: "10.5rem",
              height: "10.5rem",
              marginBottom: "-10rem",
              marginTop: "20rem",
            }}
          />
          <Info />
        </div>
      </div>
    </>
  );
}
