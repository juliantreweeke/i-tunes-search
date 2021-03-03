import { ADD_MUSIC_TRACKS } from "../Types/Music-tracks-types";

export const music_tracks_reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_MUSIC_TRACKS:
      return [...action.payload.data];
    default:
      return state;
  }
};
