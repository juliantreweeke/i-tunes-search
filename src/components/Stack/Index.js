import PropTypes from 'prop-types';
import React from 'react';
import styles from './stack.module.css';

const Stack = ({ children, gutter, gutterEnd }) => {
  const style = { 
    '--gutter': `${gutter}px`,
    '--gutter-end': gutterEnd ? `${gutterEnd}px` : `${gutter}px`,
  };
  return (
    <div style={style} className={styles.stack}>
      {children}
    </div>
  );
};

Stack.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.string.isRequired,
  gutterEnd: PropTypes.string,
};

export default Stack;
