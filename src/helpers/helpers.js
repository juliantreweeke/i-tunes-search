import { CHARACTER_LIMIT } from "./constants";

export const formatDateString = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const isObjectEmpty = (object) => Object.entries(object).length === 0;

export const truncateString = (string) => {
  if (!string) {
    return;
  }
  if (string.length <= CHARACTER_LIMIT) {
    return string;
  }
  return `${string.slice(0, CHARACTER_LIMIT)}...`;
};

export const resizeITunesImageURL = (url, width) => {
  const trimmedUrl = url.substring(0, url.lastIndexOf("/") + 1);
  return `${trimmedUrl}${width}x${width}bb.jpg`;
};

export const millisecondsToMinutes = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
