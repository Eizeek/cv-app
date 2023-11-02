import Skills from "./Skills";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Skills component", () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        skills: [
          { id: 1, title: "JavaScript", percentage: 80 },
          { id: 2, title: "React", percentage: 90 },
        ],
      })
    );
  });

  it("should render the correct title", () => {
    const { getByText } = render(<Skills title="My Skills" />);

    expect(screen.getByText("My Skills")).toBeInTheDocument();
  });

  it("should render the edit button", () => {
    const { getByText } = render(<Skills title="My Skills" />);

    expect(screen.getByText("Open Edit")).toBeInTheDocument();
  });

  it("should render the skills list", () => {
    const { getAllByRole } = render(<Skills title="My Skills" />);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("should render the correct skill percentage", () => {
    const { getByText } = render(<Skills title="My Skills" />);

    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("90%")).toBeInTheDocument();
  });
});
