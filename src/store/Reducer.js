import { combineReducers } from "redux";
import { albums } from "./Reducers/albums.reducer";
import { error } from "./Reducers/error.reducer";
import { searchQuery } from "./Reducers/searchQuery.reducer";

export default combineReducers({ albums, error, searchQuery });
