import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/Index";
import styles from "./searchbar.module.css";
import useForm from "../../hooks/useForm";
import EN from "../../EN.json";

const SearchBar = ({ loading, placeholder, handleSearch }) => {
  const fieldName = "searchQuery";

  const initialFieldValues = { searchQuery: ''}

  const {inputs, handleInputChange, handleKeyPress, handleSubmit} = useForm(handleSearch, initialFieldValues);
  const isButtonDisabled = loading || Object.entries(inputs).length === 0;

  return (
    <form
      className={styles.searchbar}
      onSubmit={handleSubmit}
    >
      <label htmlFor={fieldName}>
        <span className="visually-hidden">
          Enter search criteria here
        </span>
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="text"
          id={fieldName}
          placeholder={placeholder || EN.DEFAULT_SEARCH_PLACEHOLDER}
          name={fieldName}
          onChange={handleInputChange}
          value={inputs[initialFieldValues]}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Button disabled={isButtonDisabled} type="submit">{EN.SEARCH}</Button>
    </form>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchBar;
