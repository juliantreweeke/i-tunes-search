import React from "react";
import { render } from "@testing-library/react";
import Heading from "./Index";

describe("Heading", () => {
  it("should render", () => {
    const { container } = render(<Heading headingLevel="h1" />);
    expect(container).toBeTruthy();
  });

  it("matches snapshot with prop data", () => {
    const { container } = render(<Heading headingLevel="h1" />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with invalid headingLevel prop data", () => {
    const { container } = render(<Heading headingLevel="invalidvalue" />);
    expect(container).toMatchSnapshot();
  });
});
