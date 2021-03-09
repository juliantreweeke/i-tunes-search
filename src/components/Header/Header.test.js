import React from "react";
import { render } from "@testing-library/react";
import Header from "./Index";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Header", () => {
  it("should render", () => {
    const { container } = render(
      <Header>
        <div>
          <p>content</p>
        </div>
      </Header>
    );
    expect(container).toBeTruthy();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Header>
        <div>
          <p>content</p>
        </div>
      </Header>
    );
    expect(container).toMatchSnapshot();
  });

  it("component should have no accessibility violations", async () => {
    const { container } = render(
      <Header>
        <div>
          <p>content</p>
        </div>
      </Header>
    );
    expect.extend(toHaveNoViolations);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
