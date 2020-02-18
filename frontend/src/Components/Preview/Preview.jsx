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
      src: 'api/public/photo/7c4d9589-acda-4ee6-b79f-40f5d29af462',
    },
    {
      id: 1,
      order_id: 1,
      src: 'api/public/photo/70c16df0-bac9-464e-8857-cb0e0d096ff9',
    },
    {
      id: 2,
      order_id: 2,
      src: 'api/public/photo/492f5287-5d45-4f4d-9282-045f94e6a317',
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
