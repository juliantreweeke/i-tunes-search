import PropTypes from 'prop-types';
import React from 'react';
import styles from './button.module.css';
import { Link } from 'gatsby';

const Button = ({ children, variant, ...props }) => {
  const HyperLinkButton = (
    <a href={props.href} aria-label="Email me to find out how we can work together" className={styles.button} data-variant={variant}>
      {children}
    </a>
  );
    // todo
  const IconButton = (
    <Link {...props} className={styles.button} data-variant={variant}>
      {children}
    </Link>
  );

  const LinkButton = (
    <Link {...props} className={styles.button} data-variant={variant}>
      {children}
    </Link>
  );

  const StandardButton = (
    <button {...props} className={styles.button} data-variant={variant}>
      {children}
    </button> 
  );

  if(props.to){
    return LinkButton
  }
  if(props.href){
    return HyperLinkButton
  }
  return StandardButton
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Button;