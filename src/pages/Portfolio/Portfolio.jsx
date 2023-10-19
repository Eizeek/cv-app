import Box from "../../components/Box/Box";
import Experience from "../../components/Experience/Experience";
import Timeline from "../../components/Timeline/Timeline";
import Port from "../../components/Port/Port";
import "./Portfolio.css";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";
import Panel from "../../components/Panel/Panel";

export default function Portfolio() {
  return (
    <>
      <Panel />

      <main className="port">
        <Box
          title="About Me"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
        />
        <Timeline title="Education" />
        <Experience title="Experience" />
        <Port title="Portfolio" />
        <Address title="Contacts" />
        <Feedback title="Feedback" />
      </main>
    </>
  );
}
