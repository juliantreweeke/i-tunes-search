import {
  filterArrOfObjectsByKey,
  formatDateStringToYear,
  isObjectEmpty,
  millisecondsToMinutes,
} from "./helpers";

describe("helpers", () => {
  describe("filterArrOfObjectsByKey()", () => {
    it("returns an array an objects filtered by a specified key", () => {
      const mockArray = [
        {artistName: 'Lazerhawk', collectionId: 123456 },
        {artistName: 'Kavinsky', collectionId: 555123 },
        {artistName: 'Kavinsky', collectionId: 555123 },
        {artistName: 'Kavinsky', collectionId: 555123 },
        {artistName: 'Lazerhawk', collectionId: 123456 },
      ]

      const expectedResult = [
        {artistName: 'Lazerhawk', collectionId: 123456 },
        {artistName: 'Kavinsky', collectionId: 555123 },
      ]

      const result = filterArrOfObjectsByKey(mockArray, 'collectionId');

      expect(result).toEqual(expectedResult);
    });
  });

  describe("formatDateStringToYear()", () => {
    it("returns expected value", () => {
      const mockDateString = "2020-03-18T12:00:00Z";
      const result = formatDateStringToYear(mockDateString);
      const expectedResult = "2020";

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

  describe("millisecondsToMinutes()", () => {
    it("converts milliseconds to readable format in minutes", () => {
      const THREE_MINS_IN_MILLISECONDS = 180000;
      const result = millisecondsToMinutes(THREE_MINS_IN_MILLISECONDS);
      const expectedResult = "3:00";
      
      expect(result).toEqual(expectedResult);
    });
  });
});
