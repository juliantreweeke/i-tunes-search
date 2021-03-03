import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../components/Layout/Index';
import styles from './home.module.css';
import useSearchQuery from '../../hooks/useSearchQuery';

const Home = () => {
  const { searchQuery } = useSearchQuery();

  return (
    <Layout>
      This is home route
      <div>You searched for {searchQuery}</div>
    </Layout>
  );
};

Home.propTypes = {
};

export default Home;