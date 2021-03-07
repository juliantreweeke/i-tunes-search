import { SET_ALBUM } from "../Types";
import { formatDateString, resizeITunesImageURL } from "../../helpers/helpers";

const parseAlbum = (data) => {
  return (dispatch) => {
    const [album, ...trackList] = data;

    const parsedTrackList = trackList.map((track) => {
      return {
        title: track.trackName,
        text: track.trackTimeMillis,
      };
    });

    const parsedData = {
      detail: formatDateString(album.releaseDate),
      title: album.collectionName,
      text: album.artistName,
      image: resizeITunesImageURL(album.artworkUrl100, 500),
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
