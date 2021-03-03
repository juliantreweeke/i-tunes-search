import PropTypes from "prop-types";
import React from "react";
import Heading from '../Heading/Index';
import SearchBar from '../SearchBar/Index';
import styles from "./header.module.css";
import iTunesIcon from "../../itunes.svg";

const Header = ({ children }) => {
  return (
    <header>
      <Heading headingLevel="h1">iTunes Album Search</Heading>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
