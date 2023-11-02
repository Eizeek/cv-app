import Timeline from "./Timeline";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Timeline component", () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        education: {
          data: [
            {
              id: 1,
              date: "2023-08-01",
              title: "Master of Science in Computer Science",
              text: "Stanford University",
            },
            {
              id: 2,
              date: "2021-05-01",
              title: "Bachelor of Science in Computer Science",
              text: "University of California, Berkeley",
            },
          ],
          loading: false,
        },
      })
    );
  });

  it("should render the title", () => {
    const { getByText } = render(<Timeline title="Education" />);

    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("should render the timeline events when the data is loaded", () => {
    const { getAllByRole } = render(<Timeline title="Education" />);

    expect(screen.getAllByRole("listitem").length).toBe(2);
  });

  it("should render a loading spinner when the data is loading", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        education: {
          data: [],
          loading: true,
        },
      })
    );

    const { getByRole } = render(<Timeline title="Education" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
