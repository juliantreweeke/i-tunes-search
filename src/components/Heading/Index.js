import PropTypes from 'prop-types';
import React from 'react';
import styles from './heading.module.css';


const Heading = ({ children, headingLevel, variant, size }) => {

  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const Title = validHeadingLevels.includes(headingLevel) ? headingLevel : 'p'; 

  return (
    <Title className={styles.heading} data-variant={variant} data-size={size}>{children}</Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  headingLevel: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Heading;
