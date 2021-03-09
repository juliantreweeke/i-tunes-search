import React from "react";
import { render } from "@testing-library/react";
import InfoBox from "./Index";
import { axe, toHaveNoViolations } from "jest-axe";

const mockData = {
  heading: "heading",
  title: 'a title',
  image: "testimage.com",
  text: "some text for testing",
  detail: "some detail text for testing",
};
const mockUrl = "test.com";
const mockButtonText = "buy now";

describe("InfoBox", () => {
  it("should render", () => {
    const { container } = render(
      <InfoBox
        data={mockData}
        url={mockUrl}
        headingLevel="h2"
        buttonText={mockButtonText}
      />
    );
    expect(container).toBeTruthy();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <InfoBox
        data={mockData}
        url={mockUrl}
        headingLevel="h2"
        buttonText={mockButtonText}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Component should have no accessibility violations", async () => {
    const { container } = render(
      <InfoBox
        data={mockData}
        url={mockUrl}
        headingLevel="h2"
        buttonText={mockButtonText}
      />
    );
    expect.extend(toHaveNoViolations);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
