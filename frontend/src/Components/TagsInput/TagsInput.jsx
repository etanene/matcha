import React, { useState, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { apiService } from '../../Services';

import { profileAction } from '../../Actions';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import ListGroup from '../common/ListGroup/ListGroup';
import ListButton from '../common/ListButton/ListButton';
import Tag from '../common/Tag/Tag';
import './TagsInput.css';

const tagsInputCss = cn('tags-input');

function TagsInput(props) {
  const { tags, title, cls } = props;

  const [currentTag, setCurrentTag] = useState();
  const [tagsList, setTagsList] = useState([]);
  const dispatch = useDispatch();

  function handleChangeInput(event) {
    event.persist();

    const { value } = event.target;

    setCurrentTag(value);
  }

  async function fetchTag(value) {
    try {
      if (!value) {
        return;
      }
      const res = await apiService.getJson(`/api/tag/get?tag=${value}`);
      setTagsList(res.map((tag) => (tag.tag_value)));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTag(currentTag);
  }, [currentTag]);

  function handleAddTag(value) {
    return () => {
      if (!tags.includes(value)) {
        dispatch(profileAction.setData('tags', [...tags, value]));
        setCurrentTag('');
        setTagsList([]);
      }
    };
  }

  return (
    <div className={tagsInputCss({}, [cls])}>
      {title && <span className={tagsInputCss('title')}>{title}</span>}
      <div className={tagsInputCss('tags')}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className={tagsInputCss('input')}>
        <Input
          name="tags"
          placeholder="Tags"
          value={currentTag}
          onChange={handleChangeInput}
        />
        <Button type="button" onClick={handleAddTag(currentTag)}>add</Button>
      </div>
      <ListGroup>
        {tagsList.map((tag) => (
          <ListButton key={tag} onClick={handleAddTag(tag)}>{tag}</ListButton>
        ))}
      </ListGroup>
    </div>
  );
}

TagsInput.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.string,
  ),
  title: PropTypes.string,
  cls: PropTypes.string,
};

TagsInput.defaultProps = {
  tags: [],
  title: '',
  cls: '',
};

export default TagsInput;
