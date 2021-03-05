import PropTypes from "prop-types";
import React from "react";
import Card from '../Card/Index';
import styles from "./cardDeck.module.css";

const CardDeck = ({ data }) => {
  return (
    <ul className={styles.cardDeck}>
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </ul>
  );
};

CardDeck.propTypes = {
  data: PropTypes.array,
};

export default CardDeck;
