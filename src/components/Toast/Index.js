import PropTypes from "prop-types";
import React, { useEffect } from "react";
import useError from "../../hooks/useError";
import { ERROR_TYPES, ERROR_MESSAGES } from "./constants";
import styles from "./toast.module.css";

const Toast = ({delay = 2500}) => {
  const { error, setError } = useError();

  const errorMessage =
    error === ERROR_TYPES.FAILED_TO_FETCH
      ? ERROR_MESSAGES.SEARCH_ERROR
      : ERROR_MESSAGES.UNKNOWN;

      useEffect(
        () => {
          setTimeout(() => setError(null), delay);
        },
        [delay, setError]
      );

  return (
    <>
      <div className={styles.toastContainer}>
        <div className={styles.toastNotification}>
          <div>
            <p className={styles.toastTitle}>Error</p>
            <p className={styles.toastMessage}>{errorMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;

Toast.propTypes = {
  delay: PropTypes.number
};
