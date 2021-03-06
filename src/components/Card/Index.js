import PropTypes from "prop-types";
import React from 'react';
import styles from "./card.module.css";
import Heading from "../Heading/Index";

import { 
  formatDateString, 
  truncateString,
  resizeITunesImageURL
} from "../../helpers/helpers";


const Card = ({ data, onClick }) => {

  const albumUrl = `/album/${data.collectionId}`;
  const albumImage = resizeITunesImageURL(data.artworkUrl100, 250);
  const albumName = truncateString(data.collectionName);
  const artistName = truncateString(data.artistName);
  const releaseDate = formatDateString(data.releaseDate);

  return (
    <li onClick={onClick} className={styles.card}>
      <a href={albumUrl}>
        <div className={styles.imageContainer}>
          <img
            src={albumImage}
            alt={data.collectionName}
          />
        </div>
        <div className={styles.text}> 
          <Heading size="medium" className={styles.heading} headingLevel="h2">
            {albumName}
          </Heading>
          <p>{artistName}</p>
        </div>
        <div className={styles.dateContainer}>
          <small>{releaseDate}</small>
        </div>  
      </a>
    </li>
  )};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Card;
