import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import { ICONS } from '../../Constants';

import PhotoSlider from '../PhotoSlider/PhotoSlider';
import Tag from '../common/Tag/Tag';
import Icon from '../common/Icon/Icon';
import './Preview.css';

const previewCss = cn('preview');

function Preview(props) {
  const { discover, cls } = props;

  console.log('discover preview', discover);

  if (discover) {
    return (<div />);
  }
  return (
    <div className={previewCss({}, [cls])}>
      <div className={previewCss('user-name')}>
        {`${discover.firsName} ${discover.lastName}`}
      </div>
      <PhotoSlider photos={discover.photos} cls={previewCss('photo-slider')} />
      <div className={previewCss('container')}>
        <Icon icon={ICONS.DISLIKE} viewBox="0 0 36 36" size="l" />
        <div className={previewCss('tags')}>
          {discover.tags.map((tag) => (
            <Tag key={tag.id}>{tag.value}</Tag>
          ))}
        </div>
        <Icon icon={ICONS.LIKE} viewBox="0 0 512 512" size="l" />
      </div>
      <div className={previewCss('about')}>
        {discover.about}
      </div>
    </div>
  );
}

Preview.propTypes = {
  discover: PropTypes.shape({
    firsName: PropTypes.string,
    lastName: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.object),
    about: PropTypes.string,
  }),
  cls: PropTypes.string,
};

Preview.defaultProps = {
  discover: {},
  cls: '',
};

export default Preview;
