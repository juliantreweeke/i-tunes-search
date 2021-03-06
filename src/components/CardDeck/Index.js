import PropTypes from "prop-types";
import React from "react";
import Card from '../Card/Index';
import styles from "./cardDeck.module.css";

const CardDeck = ({ data, onCardClicked }) => {
  return (
    <ul className={styles.cardDeck}>
      {data.map((item, index) => (
        <Card key={index} data={item} onClick={() => { onCardClicked(index) }} />
      ))}
    </ul>
  );
};

CardDeck.propTypes = {
  data: PropTypes.array,
  onCardClicked: PropTypes.func
};

export default CardDeck;
