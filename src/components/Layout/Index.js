import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Index';
import AlbumSearch from '../AlbumSearch/Index';

import './layout.css'

const Layout = ({ children}) => {
  return (
    <div className="layout">
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