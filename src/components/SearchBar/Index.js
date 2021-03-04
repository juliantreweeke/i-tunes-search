import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "../Button/Index";
import styles from "./searchbar.module.css";
import EN from "../../EN.json";

const SearchBar = ({ loading, placeholder, handleSubmit }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearchQuery = (event) => {
    event.preventDefault();
    handleSubmit(searchQuery);
    resetInputField();
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchQuery(event)
    }
  };

  const resetInputField = () => {
    setSearchQuery('');
  }

  return (
    <form
      className={styles.searchbar}
      onKeyPress={handleKeyPress}
      onSubmit={handleSearchQuery}
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
          onChange={handleInputChange}
          value={searchQuery}
        />
      </div>
      <Button disabled={loading} type="submit">{EN.SEARCH}</Button>
    </form>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchBar;
