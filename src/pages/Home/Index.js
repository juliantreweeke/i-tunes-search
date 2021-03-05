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
      This is home route
      <p>You searched for {searchQuery}</p>
      <CardDeck data={albums} />
    </Layout>
  );
};

Home.propTypes = {
};

export default Home;