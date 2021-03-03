import PropTypes from "prop-types";
import React from "react";
import styles from "./button.module.css";

const Button = ({ children, variant, href, label, ...props }) => {
  const HyperLinkButton = (
    <a
      href={href}
      aria-label={label}
      className={styles.button}
      data-variant={variant}
    >
      {children}
    </a>
  );
  // todo

  const StandardButton = (
    <button {...props} className={styles.button} data-variant={variant}>
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
