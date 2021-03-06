import React from "react";
import Layout from "../../components/Layout/Index";
import Button from "../../components/Button/Index";
import CardDeck from "../../components/CardDeck/Index";
import styles from "./home.module.css";
import useSearchQuery from "../../hooks/useSearchQuery";
import useAlbums from "../../hooks/useAlbums";
import EN from "../../EN.json";

const Home = () => {
  const {
    albums,
    displayedAlbums,
    setDisplayedAlbums
  } = useAlbums();
  const { searchQuery } = useSearchQuery();

  const displayLoadMoreButton = displayedAlbums?.length < albums?.length;

  return (
    <Layout>
      {albums && (
        <>
          <div role="alert" className={styles.searchStatus}>
            <p>
              You searched for <strong>{searchQuery}</strong> which has{" "}
              <strong>{albums.length}</strong> results
            </p>
          </div>
          <CardDeck data={displayedAlbums} />
          {displayLoadMoreButton && (
            <div className={styles.loadMoreButtonContainer}>
              <Button variant="outline" onClick={setDisplayedAlbums}>{EN.LOAD_MORE}</Button>
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default Home;
