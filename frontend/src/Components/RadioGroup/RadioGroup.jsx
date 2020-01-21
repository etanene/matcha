import React from 'react';

import RadioButton from '../RadioButton/RadioButton';

function RadioGroup(props) {
  const { children, ...rest } = props;

  React.Children.map(children, (child) => {
    if (child.type === RadioButton) {
      return React.cloneElement(child, {...rest});
    }
  });
}

export default RadioGroup;
