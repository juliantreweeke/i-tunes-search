import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Index';
import styles from './album.module.css';
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import useError from '../../hooks/useError';

import { I_TUNES_BASE_URL } from '../../constants';


const Album = () => {
  const [album, setAlbum] = useState('');
  const [trackList, setTrackList] = useState('');

  const { id } = useParams();
  const url = `${I_TUNES_BASE_URL}lookup?id=${id}&entity=song`;

  const { fetchError, fetchedData, fetchLoading } = useFetch(url);
  const { error, setError } = useError();

  useEffect(() => {
    if (!fetchLoading && fetchedData.results) {
      const [album, ...trackList] = fetchedData.results;
      setAlbum(album);
      setTrackList(trackList);
      console.log(trackList);
    } 
    if (!fetchLoading && fetchError){
      setError(fetchError);
    }
  }, [fetchedData, fetchError, fetchLoading, setError]);


  return (
    <Layout>
      {fetchLoading && <div>loading</div>}
      {error && <div>{fetchError}</div>}
      {album && 
        <div>
          <h1>{album.collectionCensoredName}</h1>
          <img alt={album.collectionCensoredName} src={album.artworkUrl100} />
          <a target="_blank" rel="noreferrer" href={album.collectionViewUrl}>BUY</a>
          {trackList.map((track,index) => {
            return (
              <p>{track.trackName}</p>
            )
            
          })}
        
        
        </div>}


    </Layout>
  );
};

Album.propTypes = {
};

export default Album;