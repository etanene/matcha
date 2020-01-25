import React, { useState, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

// import { apiService } from '../../Services';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import ListGroup from '../common/ListGroup/ListGroup';
import ListButton from '../common/ListButton/ListButton';
import './TagsInput.css';

const tagsInputCss = cn('tags-input');

function TagsInput(props) {
  const { cls } = props;

  const [currentTag, setCurrentTag] = useState();
  const [tagsList, setTagsList] = useState([]);
  const [tags, setTags] = useState([]);
  console.log('tags', tags);

  function handleChangeInput(event) {
    event.persist();

    const { value } = event.target;

    setCurrentTag(value);
  }

  async function fetchTag(value) {
    // const data = await apiService.getJson(`/api/tags/get?tag=${value}`);

    let data = [];
    if (value[0] === 'c') {
      data = ['cars', 'cats'];
    } else if (value[0] === 'd') {
      data = ['dogs'];
    }
    console.log(data);
    setTagsList(data);
  }

  useEffect(() => {
    fetchTag(currentTag);
  }, [currentTag]);

  function handleAddTag(value) {
    return function () {
      setTags([...tags, value]);
    };
  }

  return (
    <div className={tagsInputCss({}, [cls])}>
      <div className={tagsInputCss('tags')}>
        {tags.map((tag) => (
          <span>{tag}</span>
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
          <ListButton>{tag}</ListButton>
        ))}
      </ListGroup>
    </div>
  );
}

TagsInput.propTypes = {
  cls: PropTypes.string,
};

TagsInput.defaultProps = {
  cls: '',
};

export default TagsInput;
