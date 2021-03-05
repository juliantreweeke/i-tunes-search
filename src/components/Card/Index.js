import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
import Heading from "../Heading/Index";
import { formatDateString } from "../../helpers/helpers";

const Card = ({ data }) => {

  const releaseDate = formatDateString(data.releaseDate);

  return (
    <li className={styles.card}>
      <a className={styles.link} href="/card-design-woes">
        <div className={styles.imageContainer}>
          <img
            src={data.artworkUrl100}
            alt="Description of the great product's appearance"
          />
        </div>
        <div className={styles.text}>
          <Heading size="medium" className={styles.heading} headingLevel="h2">
            {data.trackName}
          </Heading>
          <p>{data.artistName}</p>
          <small>{releaseDate}</small>
        </div>
      </a>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
