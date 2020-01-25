import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import RadioButton from '../common/RadioButton/RadioButton';
import './RadioGroup.css';

const radioGroupCss = cn('radio-group');

function RadioGroup(props) {
  const {
    title,
    children,
    value,
    name,
    onChange,
    cls,
  } = props;

  return (
    <div className={radioGroupCss({}, [cls])}>
      {title && <span className={radioGroupCss('title')}>{title}</span>}
      <div className={radioGroupCss('input-container')}>
        {React.Children.map(children, (child) => {
          if (child.type === RadioButton) {
            return React.cloneElement(child, {
              checked: value === child.props.value,
              name,
              onChange,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  cls: PropTypes.string,
};

RadioGroup.defaultProps = {
  title: '',
  children: null,
  value: '',
  name: '',
  onChange: null,
  cls: '',
};

export default RadioGroup;
