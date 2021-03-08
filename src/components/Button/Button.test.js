import React from "react";
import { render } from "@testing-library/react";
import Button from "./Index";

describe("Button", () => {
  it("should render", () => {
    const { container } = render(<Button>Submit</Button>);
    expect(container).toBeTruthy();
  });

  it("Standard button matches snapshot with data props", () => {
    const { container } = render(<Button>Submit</Button>);
    expect(container).toMatchSnapshot();
  });

  it("Standard button matches snapshot with loading data props", () => {
    const { container } = render(<Button loading={true}>Submit</Button>);
    expect(container).toMatchSnapshot();
  });

  it("HyperLinkButton button matches snapshot with data props", () => {
    const { container } = render(
      <Button href="http://test.com" label="label">
        Buy now
      </Button>
    );
    expect(container).toMatchSnapshot();
  });
});
