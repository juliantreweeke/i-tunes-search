import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../components/Layout/Index';
import CardDeck from '../../components/CardDeck/Index';
import styles from './home.module.css';
import useSearchQuery from '../../hooks/useSearchQuery';
import useAlbums from '../../hooks/useAlbums';
  
const Home = () => {
  const { albums } = useAlbums();
  const { searchQuery } = useSearchQuery();

  return (
    <Layout>
      { searchQuery && (
        <div role="alert" className={styles.searchStatus}>
          <p>You searched for <strong>{searchQuery}</strong> which has <strong>{albums.length}</strong> results</p>
        </div>
      )}
      
      <CardDeck data={albums} />
    </Layout>
  );
};

Home.propTypes = {
};

export default Home;