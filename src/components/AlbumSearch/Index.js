import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/Index";
import { I_TUNES_SEARCH_URL } from '../../constants';
import useSetAlbums from '../../hooks/useSetAlbums';
import useSearchQuery from '../../hooks/useSearchQuery';
import useFetch from '../../hooks/useFetch';

import EN from "../../EN.json";

const AlbumSearch = () => {
  const [url, setUrl] = useState('');

  const { setAlbums } = useSetAlbums();
  const { setSearchQuery } = useSearchQuery();
  const { data, loading } = useFetch(url);

  const handleSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setUrl(`${I_TUNES_SEARCH_URL}${searchQuery}`);
  };

   useEffect(() => {
    if (!loading && data) {
        setAlbums(data.results)
    }
  }, [data, loading, setAlbums]);

  return (
    <SearchBar 
      handleSubmit={handleSubmit} 
      loading={loading}
      placeholder={EN.SEARCH_ALBUMS} 
    />
  );
};

AlbumSearch.propTypes = {
};

export default AlbumSearch;