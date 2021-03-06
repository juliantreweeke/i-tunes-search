import React from "react";
import styles from "./loading-spinner.module.css";

const LoadingSpinner = ({size}) => <div id="loading-spinner" data-size={size} className={styles.spinner}></div>

export default LoadingSpinner;
