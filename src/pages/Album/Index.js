import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Index';
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import useAlbum from '../../hooks/useAlbum';
import useError from '../../hooks/useError';
import Button from '../../components/Button/Index';

import List from '../../components/List/Index';
import ImageBox from '../../components/ImageBox/Index';
import Heading from '../../components/Heading/Index';
import EN from '../../EN.json';

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
        <ImageBox alt={album.title} image={album.image} loading={fetchLoading} />
          <div className={styles.info}>
          <Heading size="massive" className={styles.heading} headingLevel="h2">
            {album.title}
          </Heading>

          <p className={styles.text}><strong>{album.text}</strong> - {album.detail}</p>
            <div className={styles.buttonContainer}>
              <Button href={album.url} label={album.title}>
                { EN.BUY_ALBUM }
              </Button>
            </div>
          </div>
        <section>
        <Heading size="medium" headingLevel="h3">
            {EN.TRACK_LIST}
        </Heading>
          <List data={album.trackList} />
        </section>
      </section>
    </Layout>
  );
};

Album.propTypes = {
};

export default Album;