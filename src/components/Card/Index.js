import PropTypes from "prop-types";
import React from 'react';
import styles from "./card.module.css";
import Heading from "../Heading/Index";

const Card = ({ data, onClick }) => {

  return (
    <li onClick={onClick} className={styles.card}>
      <a href={data.url}>
        <div className={styles.imageContainer}>
          <img
            src={data.image}
            alt={data.collectionName}
          />
        </div>
        <div className={styles.text}> 
          <Heading size="medium" className={styles.heading} headingLevel="h2">
            {data.heading}
          </Heading>
          <p>{data.text}</p>
        </div>
        <div className={styles.detailContainer}>
          <small>{data.detail}</small>
        </div>  
      </a>
    </li>
  )};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Card;
