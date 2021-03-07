import PropTypes from "prop-types";
import React from "react";
import LoadingSpinner from "../LoadingSpinner/Index";
import styles from "./button.module.css";

const Button = ({ children, variant, href, label, loading, ...props }) => {
  const HyperLinkButton = (
    <a
      href={href}
      aria-label={label}
      className={styles.button}
      data-variant={variant}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );

  const StandardButton = (
    <button {...props} className={styles.button} data-variant={variant} data-loading={loading}>
      {loading && 
        <div className={styles.loadingSpinnerContainer}>
          <LoadingSpinner size="small" />
        </div>
        }
      {children}
    </button>
  );

  if (href) {
    return HyperLinkButton;
  }
  return StandardButton;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Button;
