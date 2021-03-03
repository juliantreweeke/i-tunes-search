import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Index';
import SearchBar from '../SearchBar/Index';

import './layout.css'

const Layout = ({ children}) => {
  return (
    <div className="layout">
      <Header>
        <SearchBar />
      </Header>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;