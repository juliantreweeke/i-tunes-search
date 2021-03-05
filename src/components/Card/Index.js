import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import Heading from "../Heading/Index";
import { formatDateString, truncateString } from "../../helpers/helpers";
// import EN from '../../EN.json';

const Card = ({ data }) => {

  return (
    <li className={styles.card}>
      <a href="/card-design-woes">
        <div className={styles.imageContainer}>
          <img
            src={data.artworkUrl100}
            alt="Description of the great product's appearance"
          />
        </div>
        <div className={styles.text}> 
          <Heading size="medium" className={styles.heading} headingLevel="h2">
            {truncateString(data.trackName)}
          </Heading>
          <p>{truncateString(data.artistName)}</p>
        </div>
        <div className={styles.dateContainer}>
          <small>{formatDateString(data.releaseDate)}</small>
        </div>  
      </a>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
