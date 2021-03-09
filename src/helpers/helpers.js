/**
 * Filters an array of object by a specified key and removes duplicates
 *
 * @param {Array} array an array of object
 * @param {key} strings the key of the object used to compare
 *
 * @returns {Array}
 */
export const filterArrOfObjectsByKey = (array, key) => {
  const filteredArray = array.filter(
    (array, index, self) =>
      index ===
      self.findIndex((arrayToCompare) => arrayToCompare[key] === array[key])
  );
  return filteredArray;
};

/**
 * Converts a date string to a year.
 *
 * @param {String} dateString a date like value
 *
 * @returns {String}
 */
export const formatDateStringToYear = (dateString) => {
  const options = { year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Check to see if a object is empty
 *
 * @param {Object} object
 *
 * @returns {Boolean}
 */
export const isObjectEmpty = (object) => Object.entries(object).length === 0;

/**
 * As iTunes API only returns a set of small images
 * This function updates the url string to allow for larger images.
 *
 * @param {String} url an itunes image url
 * @param {String} width the width of the image to return
 *
 * @returns {String}
 */
export const resizeITunesImageURL = (url, width) => {
  const trimmedUrl = url.substring(0, url.lastIndexOf("/") + 1);
  return `${trimmedUrl}${width}x${width}bb.jpg`;
};

/**
 * Converts a numberical value of millisends
 * into a readable string of minutes to be displayed.
 *
 * @param {Number} milliseconds
 *
 * @returns {String}
 */
export const millisecondsToMinutes = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
