import React from "react";
import Layout from "../../components/Layout/Index";
import CardDeck from "../../components/CardDeck/Index";
import styles from "./home.module.css";
import useSearchQuery from "../../hooks/useSearchQuery";
import useAlbums from "../../hooks/useAlbums";

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
            <button onClick={setDisplayedAlbums}>Load more</button>
          )}
        </>
      )}
    </Layout>
  );
};

export default Home;
