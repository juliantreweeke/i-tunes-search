import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./Index";
import { axe, toHaveNoViolations } from "jest-axe";

const mockHandleSearch = jest.fn();
const mockPlaceHolder = "placeholder";

describe("SearchForm", () => {
  it("should render", () => {
    const { container } = render(
      <SearchForm
        handleSearch={mockHandleSearch}
        placeholder={mockPlaceHolder}
      />
    );
    expect(container).toBeTruthy();
  });

  it("matches snapshot with placeholder prop", () => {
    const { container } = render(
      <SearchForm
        handleSearch={mockHandleSearch}
        placeholder={mockPlaceHolder}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot without placeholder prop", () => {
    const { container } = render(
      <SearchForm handleSearch={mockHandleSearch} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with loading prop", () => {
    const { container } = render(
      <SearchForm handleSearch={mockHandleSearch} loading={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Component should have no accessibility violations", async () => {
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <SearchForm
        handleSearch={mockHandleSearch}
        placeholder={mockPlaceHolder}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("input should allow values to be entered", async () => {
    const setup = () => {
      const utils = render(<SearchForm placeholder={mockPlaceHolder} handleSearch={mockHandleSearch}/>)
      const input = utils.getByPlaceholderText(mockPlaceHolder);
      return {
        input,
        ...utils,
      }
    }
    const searchQuery = 'a music search';
    const { input } = setup();
    fireEvent.change(input, { target: { value: searchQuery } })
    expect(input.value).toBe(searchQuery)
  });
});
