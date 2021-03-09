import React from "react";
import { render } from "@testing-library/react";
import ImageBox from "./Index";

describe("ImageBox", () => {
  const mockImageUrl = "test.com";
  const mockAlt = "altTag";

  it("should render", () => {
    const { container } = render(
      <ImageBox headingLevel="h1" image={mockImageUrl} alt={mockAlt} />
    );
    expect(container).toBeTruthy();
  });

  it("matches snapshot with prop data", () => {
    const { container } = render(
      <ImageBox headingLevel="h1" image={mockImageUrl} alt={mockAlt} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with prop data when loading is true", () => {
    const { container } = render(
      <ImageBox
        headingLevel="h1"
        loading={true}
        image={mockImageUrl}
        alt={mockAlt}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
