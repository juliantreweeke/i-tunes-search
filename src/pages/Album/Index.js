import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Index';
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import useAlbum from '../../hooks/useAlbum';
import useError from '../../hooks/useError';
import ImageBox from '../../components/ImageBox/Index';
import styles from "./album.module.css";

import { I_TUNES_BASE_URL } from '../../constants';


const Album = () => {
  const { album, parseAlbum } = useAlbum();

  const { id } = useParams();
  const url = `${I_TUNES_BASE_URL}lookup?id=${id}&entity=song`;

  const { fetchError, fetchedData, fetchLoading } = useFetch(url);
  const { setError } = useError();

  useEffect(() => {
    if (!fetchLoading && fetchedData.results) {
      parseAlbum(fetchedData.results);
    } 

    if (!fetchLoading && fetchError){
      setError(fetchError);
    }
  }, [fetchedData, fetchError, fetchLoading, setError, parseAlbum]);


  return (
    <Layout>
      <section className={styles.album}>
        <ImageBox data={album} loading={fetchLoading} />
      </section>
    </Layout>
  );
};

Album.propTypes = {
};

export default Album;