import PropTypes from "prop-types";
import React from "react";
import SearchBar from "../SearchBar/Index";
import { I_TUNES_SEARCH_URL } from '../../constants';
import useSearchQuery from '../../hooks/useSearchQuery';
import EN from "../../EN.json";

const AlbumSearch = () => {
  const { setSearchQuery } = useSearchQuery();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    setSearchQuery(searchTerm);
  };

  return (
    <SearchBar placeholder={EN.SEARCH_ALBUMS} handleSubmit={handleSubmit} />
  );
};

AlbumSearch.propTypes = {
};

export default AlbumSearch;