import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import Card from "../Card/Index";
import styles from "./cardDeck.module.css";

const CardDeck = forwardRef(({ data, onCardClicked }, ref) => (
  <ul ref={ref} className={styles.cardDeck}>
    {data.map((item, index) => {
      return (
        <Card
          key={index}
          data={item}
          onClick={() => {
            onCardClicked(index);
          }}
        />
      );
    })}
  </ul>
));

CardDeck.propTypes = {
  data: PropTypes.array,
  onCardClicked: PropTypes.func,
  refs: PropTypes.array,
};

export default CardDeck;
