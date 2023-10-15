import Avatar from "../../components/Avatar/Avatar";
import Info from "../../components/Info/Info";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="content">
          <Avatar />
          <Info />
        </div>
      </div>
    </>
  );
}
