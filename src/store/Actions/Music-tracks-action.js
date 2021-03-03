import { ADD_MUSIC_TRACKS } from "../Types/Music-tracks-types";

export const add_music_tracks = (data) => {
  return {
    type: ADD_MUSIC_TRACKS,
    payload: {
      data,
    },
  };
};
