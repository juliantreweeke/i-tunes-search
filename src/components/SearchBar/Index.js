import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/Index";
import styles from "./searchbar.module.css";

const handleSubmit = (event) => {
  event.preventDefault();
};

const SearchBar = ({ children }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  onkeypress = "handle";

  return (
    <form
      className={styles.searchbar}
      onKeyPress={handleKeyPress}
      onSubmit={handleSubmit}
    >
      <label htmlFor="header-search">
        <span className="visually-hidden">
          Enter album search criteria here
        </span>
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="search"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchBar;
