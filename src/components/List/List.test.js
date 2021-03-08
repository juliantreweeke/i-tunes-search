import React from "react";
import { render } from "@testing-library/react";
import List from "./Index";
import { axe, toHaveNoViolations } from "jest-axe";

const mockData = [
  {
    image: "testimage.com",
    url: "test.com",
    title: "title",
    text: "some text for testing",
    detail: "some detail text for testing",
  },
  {
    image: "testimage.com",
    url: "test.com",
    title: "title",
    text: "some text for testing",
    detail: "some detail text for testing",
  },
];

describe("List", () => {
  it("should render", () => {
    const { container } = render(<List data={mockData} />);
    expect(container).toBeTruthy();
  });

  it("matches snapshot with data", () => {
    const { container } = render(<List data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it("Component should have no accessibility violations", async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(<List data={mockData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
