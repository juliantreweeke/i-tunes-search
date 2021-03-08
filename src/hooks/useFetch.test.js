import useFetch from "./useFetch";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";

describe("useFetch", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it("should return an error object if api error", async () => {
    fetchMock.mock("test.com", 500);
    const { result } = renderHook(() => useFetch("test.com"));

    await act(async () => {
      expect(result.current.fetchLoading).toBe(true);
    });

    expect(result.current.fetchLoading).toBe(false);
    expect(result.current.fetchError).not.toBe(null);
  });

  it("should return data with a successful api request", async () => {
    fetchMock.mock("test.com", {
      returnedData: "data",
    });
    const { result } = renderHook(() => useFetch("test.com"));
    await act(async () => {
      expect(result.current.fetchLoading).toBe(true);
    });
    expect(result.current.fetchLoading).toBe(false);
    expect(result.current.fetchedData).toStrictEqual({
      returnedData: "data",
    });
  });
});
