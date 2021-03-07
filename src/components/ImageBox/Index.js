import PropTypes from "prop-types";
import React from "react";
import LoadingSpinner from "../LoadingSpinner/Index";
import styles from "./imageBox.module.css";

const ImageBox = ({ image, alt, loading }) => (
  <>
    {loading ? (
      <LoadingSpinner />
    ) : (
      <div className={styles.imageBox}>
        <img className={styles.image} alt={alt} src={image} />
      </div>
    )}
  </>
);

ImageBox.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default ImageBox;
