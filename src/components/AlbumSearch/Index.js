import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/Index";
import { I_TUNES_SEARCH_URL } from '../../constants';
import useAlbums from '../../hooks/useAlbums';
import useSearchQuery from '../../hooks/useSearchQuery';
import useError from '../../hooks/useError';
import useFetch from '../../hooks/useFetch';

import EN from "../../EN.json";

const AlbumSearch = () => {
  const [url, setUrl] = useState('');

  const { setAlbums } = useAlbums();
  const { setSearchQuery } = useSearchQuery();
  const { fetchError, fetchedData, fetchLoading } = useFetch(url);
  const { error, setError } = useError(url);


  const handleSearch = ({searchQuery}) => {
    setSearchQuery(searchQuery);
    // setUrl(`https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo`);
    setUrl(`${I_TUNES_SEARCH_URL}${searchQuery}`);
  };

   useEffect(() => {
    if (!fetchLoading && fetchedData.results) {
        setAlbums(fetchedData.results)
    } 
    if (!fetchLoading && fetchError){
      console.log(fetchError);
      setError(fetchError);
    }
  }, [fetchError, fetchedData, fetchLoading, setAlbums, setError]);



  return (
    <div>
      <SearchBar 
        handleSearch={handleSearch} 
        loading={fetchLoading}
        placeholder={EN.SEARCH_ALBUMS} 
      />
    {error}
    </div>
  );
};

AlbumSearch.propTypes = {
};

export default AlbumSearch;