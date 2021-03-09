import { SET_ALBUM } from "../Types";
import {
  formatDateStringToYear,
  resizeITunesImageURL,
  millisecondsToMinutes,
} from "../../helpers/helpers";

/**
 * Updates and formats data array of objects from api request
 * to be more easily used in components.
 *
 * @param {data} array an array of objects
 */
const parseAlbum = (data) => {
  return (dispatch) => {
    const [album, ...trackList] = data;

    const parsedTrackList = trackList.map((track) => {
      return {
        title: track.artistName,
        text: track.trackName,
        detail: millisecondsToMinutes(track.trackTimeMillis),
        image: track.artworkUrl100,
      };
    });

    const parsedData = {
      detail: formatDateStringToYear(album.releaseDate),
      title: album.collectionName,
      text: album.artistName,
      image: resizeITunesImageURL(album.artworkUrl100, 350),
      url: album.artistViewUrl,
      trackList: parsedTrackList,
    };
    dispatch(setAlbum(parsedData));
  };
};

const setAlbum = (data) => {
  return {
    type: SET_ALBUM,
    payload: {
      data,
    },
  };
};

const albumActions = {
  parseAlbum,
  setAlbum,
};

export default albumActions;
