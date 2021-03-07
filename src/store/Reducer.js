import { combineReducers } from "redux";
import { album } from "./Reducers/album.reducer";
import { albums } from "./Reducers/albums.reducer";
import { error } from "./Reducers/error.reducer";
import { searchQuery } from "./Reducers/searchQuery.reducer";

export default combineReducers({ album, albums, error, searchQuery });
