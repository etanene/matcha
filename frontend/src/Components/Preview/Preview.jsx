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
  const {
    discover,
    cls,
    onLike,
  } = props;

  console.log('discover preview', discover);

  return (
    <div className={previewCss({}, [cls])}>
      <div className={previewCss('user-name')}>
        {`${discover.firstName} ${discover.lastName}`}
      </div>
      <PhotoSlider photos={discover.photos} cls={previewCss('photo-slider')} />
      <div className={previewCss('container')}>
        <div role="button" aria-hidden onClick={onLike} onKeyPress={onLike}>
          <Icon icon={ICONS.DISLIKE} viewBox="0 0 36 36" size="l" />
        </div>
        <div className={previewCss('tags')}>
          {discover.tags.map((tag) => (
            <Tag key={tag.tag_id}>{tag.tag_value}</Tag>
          ))}
        </div>
        <div role="button" aria-hidden onClick={onLike} onKeyPress={onLike}>
          <Icon icon={ICONS.LIKE} viewBox="0 0 512 512" size="l" />
        </div>
      </div>
      <div className={previewCss('about')}>
        {discover.info}
      </div>
    </div>
  );
}

Preview.propTypes = {
  discover: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.object),
    info: PropTypes.string,
  }),
  cls: PropTypes.string,
  onLike: PropTypes.func,
};

Preview.defaultProps = {
  discover: {},
  cls: '',
  onLike: null,
};

export default Preview;
