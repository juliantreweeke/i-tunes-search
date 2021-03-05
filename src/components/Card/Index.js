import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";

const Card = ({ data }) => {
  return (
    <li className={styles.card}>
      <a href="/card-design-woes">
      <div className={styles.image}>
        <img
          src={data.artworkUrl100}
          alt="Description of the great product's appearance"
        />
      </div>
      <div className={styles.text}>
        <h2>
          {data.trackName}
        </h2>
        <p>{data.artistName}</p>
        <small>{data.releaseDate}</small>
      </div>
      </a>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
