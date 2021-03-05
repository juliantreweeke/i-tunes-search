import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/Index";
import { I_TUNES_BASE_URL } from '../../constants';
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
  const { error, setError } = useError();


  const handleSearch = ({searchQuery}) => {
    setSearchQuery(searchQuery);
    setUrl(`${I_TUNES_BASE_URL}search?term=${searchQuery}&media=music`);
  };

   useEffect(() => {
    if (!fetchLoading && fetchedData.results) {
        setAlbums(fetchedData.results)
    } 
    if (!fetchLoading && fetchError){
      setError(fetchError);
    }
  }, [fetchError, fetchedData, fetchLoading, setAlbums, setError]);



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

AlbumSearch.propTypes = {
};

export default AlbumSearch;