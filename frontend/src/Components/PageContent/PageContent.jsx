import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './PageContent.css';

const pageContentCss = cn('page-content');

function PageContent(props) {
  const { children } = props;

  return (
    <div className={pageContentCss()}>
      {children}
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
