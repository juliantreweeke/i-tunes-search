import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useAlbum from "../../hooks/useAlbum";
import useError from "../../hooks/useError";
import Layout from "../../components/Layout/Index";
import List from "../../components/List/Index";
import ImageBox from "../../components/ImageBox/Index";
import InfoBox from "../../components/InfoBox/Index";
import Heading from "../../components/Heading/Index";
import EN from "../../EN.json";
import styles from "./album.module.css";

const Album = () => {
  const { album, parseAlbum } = useAlbum();

  const { id } = useParams();
  const url = `/lookup?id=${id}&entity=song`;

  const { fetchError, fetchedData, fetchLoading } = useFetch(url);
  const { setError } = useError();

  useEffect(() => {
    if (!fetchLoading && fetchedData.results) {
      parseAlbum(fetchedData.results);
    }

    if (!fetchLoading && fetchError) {
      setError(fetchError);
    }
  }, [fetchedData, fetchError, fetchLoading, setError, parseAlbum]);

  return (
    <Layout>
      <section>
        <section className={styles.album}>
          <ImageBox
            alt={album.title}
            image={album.image}
            loading={fetchLoading}
          />
          {album && (
            <InfoBox buttonText={EN.BUY_ALBUM} headingLevel="h2" data={album} />
          )}
        </section>
        {album.trackList && (
          <section>
            <Heading size="medium" headingLevel="h3">
              {EN.TRACK_LIST}
            </Heading>
            <List data={album.trackList} />
          </section>
        )}
      </section>
    </Layout>
  );
};

export default Album;
