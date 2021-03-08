import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Card from "./Index";
import { axe, toHaveNoViolations } from "jest-axe";

const mockData = {
  url: "test.com",
  heading: "heading",
  image: "testimage.com",
  text: "some text for testing",
  detail: "some detail text for testing",
};

describe("Card", () => {
  it("should render", () => {
    const { container } = render(<Card data={mockData} />);
    expect(container).toBeTruthy();
  });

  it("matches snapshot with data", () => {
    const { container } = render(<Card data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it("when component clicked, fires onClick prop", () => {
    const onClickFunction = jest.fn();
    render(<Card data={mockData} onClick={onClickFunction} />);
    fireEvent.click(screen.getByRole("listitem"));
    expect(onClickFunction).toBeCalled();
  });

  it("When wrapped in a <ul> tag, component should have no accessibility violations", async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <ul>
        <Card data={mockData} />
      </ul>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
