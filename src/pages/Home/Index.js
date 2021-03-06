import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout/Index";
import Button from "../../components/Button/Index";
import CardDeck from "../../components/CardDeck/Index";
import styles from "./home.module.css";
import useSearchQuery from "../../hooks/useSearchQuery";
import useAlbums from "../../hooks/useAlbums";
import { sessionStore } from "../../utils/storage";
import { SESSION_STORAGE_KEYS } from "../../constants";
import EN from "../../EN.json";

const Home = () => {

  const {
    albums,
    albumToFocus,
    displayedAlbums,
    setDisplayedAlbums,
    setAlbumStateFromStorage
  } = useAlbums();

  useEffect(() => {
    setAlbumStateFromStorage()
  }, [setAlbumStateFromStorage]);

  useEffect(() => {
    if(albumToFocus && albums){
      setCardFocus(albumToFocus);
    }
  }, [albumToFocus, albums]);

  const { searchQuery } = useSearchQuery();

  const displayLoadMoreButton = displayedAlbums?.length < albums?.length;

  const setCardIndexToStorage = (index) => {
    sessionStore.setItem(SESSION_STORAGE_KEYS.album, index);
  }

  const cardDeckRef = useRef(null);

  const setCardFocus = (albumToFocus) => {
    cardDeckRef.current.children[albumToFocus].firstChild.focus();
  }

  return (
    <Layout>
      <button onClick={() => {setCardFocus(2)}}>focus</button>
      {albumToFocus}
      {albums && (
        <>
          <div role="alert" className={styles.searchStatus}>
            <p>
              You searched for <strong>{searchQuery}</strong> which has{" "}
              <strong>{albums.length}</strong> results
            </p>
          </div>
          <CardDeck ref={cardDeckRef} onCardClicked={setCardIndexToStorage} data={displayedAlbums} />
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
