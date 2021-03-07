import PropTypes from "prop-types";
import React from "react";
import LoadingSpinner from "../LoadingSpinner/Index";
import Button from "../Button/Index";
import Heading from "../Heading/Index";

import styles from "./imageBox.module.css";

const ImageBox = ({ data, loading }) => (
  <div className={styles.imageBoxContainer}>
    {loading ? (
      <LoadingSpinner />
    ) : (
      <div className={styles.imageBox}>
        <img className={styles.image} alt={data.title} src={data.image} />
        <div className={styles.content}>
          <Heading size="large" className={styles.heading} headingLevel="h2">
            {data.title}
          </Heading>
          <p className={styles.text}>{data.text}</p>
          <p className={styles.text}>{data.detail}</p>
          {data.url && (
            <div className={styles.buttonContainer}>
              <Button data-variant="outline" href={data.url} label={data.title}>
                {data.urlText}
              </Button>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

ImageBox.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default ImageBox;
