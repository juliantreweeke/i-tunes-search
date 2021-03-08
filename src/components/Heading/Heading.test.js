import React from "react";
import { render } from "@testing-library/react";
import Heading from "./Index";

describe("Heading", () => {
  it("should render", () => {
    const HeadingComponent = render(<Heading headingLevel="h1" />);
    expect(HeadingComponent).toBeTruthy();
  });

  it("matches snapshot with prop data", () => {
    const HeadingComponent = render(<Heading headingLevel="h1" />);
    expect(HeadingComponent).toMatchSnapshot();
  });

  it("matches snapshot with invalid headingLevel prop data", () => {
    const HeadingComponent = render(<Heading headingLevel="invalidvalue" />);
    expect(HeadingComponent).toMatchSnapshot();
  });
});
