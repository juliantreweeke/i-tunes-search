import { formatDateString, isObjectEmpty, truncateString } from "./helpers";

describe("helpers", () => {
  describe("formatDateString()", () => {
    it("returns excepted value", () => {
      const mockDateString = "2020-03-18T12:00:00Z";
      const result = formatDateString(mockDateString);
      const expectedResult = "18 March 2020";
      expect(result).toEqual(expectedResult);
    });
  });

  describe("isObjectEmpty()", () => {
    it("returns false if Object is not empty", () => {
      const mockObject = { searchQuery: "music" };
      expect(isObjectEmpty(mockObject)).toEqual(false);
    });

    it("returns true if Object is empty", () => {
      expect(isObjectEmpty({})).toEqual(true);
    });
  });

  describe("truncateString()", () => {
    it("truncates string if  over character limit", () => {
      const mockString =
        "This is a really long string that needs to be trimmed";
      const result = truncateString(mockString);
      const expectedResult = "This is a really long string that needs ...";
      expect(result).toEqual(expectedResult);
    });
    it("does not truncates string if under character limit", () => {
      const mockString = "This is a short string";
      const result = truncateString(mockString);
      expect(result).toEqual(mockString);
    });
  });
});
