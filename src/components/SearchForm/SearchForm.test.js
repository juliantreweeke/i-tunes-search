import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import SearchForm from "./Index";
import { axe, toHaveNoViolations } from "jest-axe";

const mockHandleSearch = jest.fn();
const mockPlaceHolder = "placeholder";
const mockSearchQuery = "a music search";

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
    render(
      <SearchForm
        placeholder={mockPlaceHolder}
        handleSearch={mockHandleSearch}
      />
    );

    const input = screen.getByPlaceholderText(mockPlaceHolder);
    const searchQuery = "a music search";

    fireEvent.change(input, { target: { value: mockSearchQuery } });
    expect(input.value).toBe(searchQuery);
  });

  it("submitting form with valid input value should call handleSearch function with the correct value", async () => {
    const { container } = render(
      <SearchForm
        handleSearch={mockHandleSearch}
        placeholder={mockPlaceHolder}
      />
    );

    const input = screen.getByPlaceholderText(mockPlaceHolder);
    const submitButton = container.querySelector("button[type='submit']");

    fireEvent.change(input, { target: { value: mockSearchQuery } });
    fireEvent.submit(submitButton);
    expect(mockHandleSearch).toBeCalledWith({ searchQuery: mockSearchQuery });
  });

  it("submitting form with no input value should not call handleSearch function", async () => {
    const { container } = render(
      <SearchForm
        handleSearch={mockHandleSearch}
        placeholder={mockPlaceHolder}
      />
    );

    const input = screen.getByPlaceholderText(mockPlaceHolder);
    const submitButton = container.querySelector("button[type='submit']");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(submitButton);
    expect(mockHandleSearch).not.toBeCalled();
  });
});
