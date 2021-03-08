export const filterArrOfObjectsByKey = (array, key) => {
  const filteredArray = array.filter(
    (array, index, self) =>
      index ===
      self.findIndex((arrayToCompare) => arrayToCompare[key] === array[key])
  );
  return filteredArray;
};

export const formatDateStringToYear = (dateString) => {
  const options = { year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const isObjectEmpty = (object) => Object.entries(object).length === 0;

export const resizeITunesImageURL = (url, width) => {
  const trimmedUrl = url.substring(0, url.lastIndexOf("/") + 1);
  return `${trimmedUrl}${width}x${width}bb.jpg`;
};

export const millisecondsToMinutes = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
