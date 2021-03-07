import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useError from "./useError";
import store from "../store/Store";
import { Provider } from "react-redux";

describe("The useError hook", () => {
  it("error should null by default", () => {
    const { result } = renderHook(() => useError(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.error).toEqual(null);
  });

  it("setError should change value of error to UNKNOWN_ERROR if a error message is not present", () => {
    const { result } = renderHook(() => useError(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    act(() => {
      result.current.setError({});
    });
    expect(result.current.error).toEqual("UNKNOWN_ERROR");
  });

  it("setError should change value of error to error message sent", () => {
    const { result } = renderHook(() => useError(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    
    const mockError = {
      message: "An error occured",
    };

    act(() => {
      result.current.setError(mockError);
    });

    expect(result.current.error).toEqual(mockError.message);
  });
});
