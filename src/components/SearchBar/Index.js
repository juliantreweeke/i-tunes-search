import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/Index";
import styles from "./searchbar.module.css";
import EN from "../../EN.json";

const SearchBar = ({ placeholder, handleSubmit }) => {

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form
      className={styles.searchbar}
      onKeyPress={handleKeyPress}
      onSubmit={handleSubmit}
    >
      <label htmlFor="header-search">
        <span className="visually-hidden">
          Enter search criteria here
        </span>
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="text"
          id="header-search"
          placeholder={placeholder || EN.DEFAULT_SEARCH_PLACEHOLDER}
          name="search"
        />
      </div>
      <Button type="submit">{EN.SEARCH}</Button>
    </form>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchBar;
