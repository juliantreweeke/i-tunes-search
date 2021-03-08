import React from "react";
import { render } from "@testing-library/react";
import CardDeck from "./Index";

const mockData = [
  { title: "a card", heading: "heading" },
  { title: "a card", heading: "heading" },
];

describe("CardDeck", () => {
  it("should render", () => {
    const { container } = render(<CardDeck data={mockData} />);
    expect(container).toBeTruthy();
  });
});
