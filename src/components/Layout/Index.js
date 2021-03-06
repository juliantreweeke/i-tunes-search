import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Index';
import Toast from '../Toast/Index';
import AlbumSearch from '../AlbumSearch/Index';
import useError from '../../hooks/useError';
import styles from './layout.module.css';

const Layout = ({ children}) => {

  const { error } = useError();

  return (
    <div className={styles.layout}>
      {error && <Toast error={error}></Toast>}
      <Header>
        <AlbumSearch />
      </Header>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;