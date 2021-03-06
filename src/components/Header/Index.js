import PropTypes from "prop-types";
import React from "react";
import Heading from '../Heading/Index';
import styles from "./header.module.css";
import EN from "../../EN.json";

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Heading size="xl" headingLevel="h1">{EN.ITUNES_ALBUMS}</Heading>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
