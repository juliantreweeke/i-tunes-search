import PropTypes from "prop-types";
import React from "react";
import styles from "./list.module.css";

const List = ({ data }) => {
  console.log(data);

  // title: track.trackName,
  //       text: track.primaryGenreName,
  //       detail: track.trackTimeMillis,

  return (
    <ul className={styles.list}>
      {data && data.map((item, index) => {
        return (
          <li
            key={index}
            className={styles.item}
          > 
          <p>{item.title}</p>
          <p>{item.text}</p>
          </li>
        );
      })}
  </ul>
  );
};

List.propTypes = {
  data: PropTypes.array,
  onCardClicked: PropTypes.func,
  refs: PropTypes.array,
};

export default List;
