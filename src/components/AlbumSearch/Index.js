import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/Index";
import { I_TUNES_BASE_URL } from "../../constants";
import useAlbums from "../../hooks/useAlbums";
import useSearchQuery from "../../hooks/useSearchQuery";
import useError from "../../hooks/useError";
import useFetch from "../../hooks/useFetch";
import { useHistory, useLocation } from "react-router-dom";

import EN from "../../EN.json";

const AlbumSearch = () => {
  const [url, setUrl] = useState("");

  const { setAlbums } = useAlbums();
  const { setSearchQuery } = useSearchQuery();
  const { fetchError, fetchedData, fetchLoading } = useFetch(url);
  const { error, setError } = useError();

  const history = useHistory();
  const { search: searchParam } = useLocation();

  const setUrlSearchQuery = (searchQuery) => {
    setUrl(`${I_TUNES_BASE_URL}search?term=${searchQuery}&media=music`);
    setSearchQuery(searchQuery);
  };

  const handleSearch = ({ searchQuery }) => {
    setUrlSearchQuery(searchQuery);
    history.replace(`/?search=${searchQuery}`);
  };

  useEffect(() => {
    if (!fetchedData.results && searchParam) {
      const URLSearchQuery = new URLSearchParams(searchParam).get("search");
      setUrlSearchQuery(URLSearchQuery);
    }

    if (!fetchLoading && fetchedData.results) {
      setAlbums(fetchedData.results);
    }
    if (!fetchLoading && fetchError) {
      setError(fetchError);
    }
  }, [fetchError, fetchedData, fetchLoading, searchParam, setAlbums, setError, setUrlSearchQuery]);

  return (
    <div>
      <SearchForm
        handleSearch={handleSearch}
        loading={fetchLoading}
        placeholder={EN.SEARCH_ALBUMS}
      />
      {error}
    </div>
  );
};

AlbumSearch.propTypes = {};

export default AlbumSearch;
