import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import { ICONS } from '../../Constants';

import PhotoSlider from '../PhotoSlider/PhotoSlider';
import Tag from '../common/Tag/Tag';
import Icon from '../common/Icon/Icon';
import './Preview.css';

const previewCss = cn('preview');

const discover = {
  firsName: 'sanya',
  lastName: 'loh',
  photos: [
    {
      id: 0,
      order_id: 0,
      src: 'api/public/photo/617e8a83-acdc-4aa2-b4d3-47cfda9d9355',
    },
    {
      id: 1,
      order_id: 1,
      src: 'api/public/photo/c7375790-94a8-429b-ad1c-0f7155b89390',
    },
    {
      id: 2,
      order_id: 2,
      src: 'api/public/photo/cbd93a04-b7d3-42f1-ba64-11df34efb4c6',
    },
  ],
  tags: [
    {
      id: 0,
      value: 'kogda',
    },
    {
      id: 1,
      value: 'sdelaesh',
    },
    {
      id: 2,
      value: 'udalenie',
    },
  ],
  about: 'opyat otmazku napishesh? A? a? a? a?',
};

function Preview(props) {
  const { cls } = props;

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
  cls: PropTypes.string,
};

Preview.defaultProps = {
  cls: '',
};

export default Preview;
