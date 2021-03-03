import PropTypes from "prop-types";
import React from "react";
import SearchBar from "../SearchBar/Index";
import EN from "../../EN.json";

const AlbumSearch = () => {

  const handleSubmit = (event) => {
    alert(event)
  };

  return (
    <SearchBar placeholder={EN.SEARCH_ALBUMS} handleSubmit={handleSubmit} />
  );
};

AlbumSearch.propTypes = {
};

export default AlbumSearch;