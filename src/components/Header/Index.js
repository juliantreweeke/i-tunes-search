import PropTypes from "prop-types";
import React from "react";
import Heading from '../Heading/Index';
import SearchBar from '../SearchForm/Index';
import styles from "./header.module.css";
import iTunesIcon from "../../itunes.svg";
import EN from "../../EN.json";

const Header = ({ children }) => {
  return (
    <header>
      <Heading variant="blue"headingLevel="h1">{EN.ALBUM_SEARCH}</Heading>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
