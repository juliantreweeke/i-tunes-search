import PropTypes from "prop-types";
import React from "react";
import styles from "./list.module.css";

const List = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data &&
        data.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              <div className={styles.content}>
                {item.image && (
                  <img
                    src={item.image}
                    className={styles.image}
                    alt={item.title}
                  />
                )}
                <div>
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                  <p>{item.text}</p>
                </div>
              </div>
              <p>{item.detail}</p>
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
