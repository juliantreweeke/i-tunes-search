import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Index";
import Heading from "../Heading/Index";
import styles from "./infoBox.module.css";

const InfoBox = ({ buttonText, data, headingLevel }) => (
  <div className={styles.infoBox}>
    <Heading
      size="massive"
      className={styles.heading}
      headingLevel={headingLevel}
    >
      {data.title}
    </Heading>
    {data.text && (
      <p className={styles.text}>
        <strong>{data.text}</strong> - {data.detail}
      </p>
    )}
    {data.url && (
      <div className={styles.buttonContainer}>
        <Button href={data.url} label={data.title}>
          {buttonText}
        </Button>
      </div>
    )}
  </div>
);

InfoBox.propTypes = {
  buttonText: PropTypes.string,
  data: PropTypes.object,
  headingLevel: PropTypes.string,
};

export default InfoBox;
