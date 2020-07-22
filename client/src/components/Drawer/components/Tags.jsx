import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchTags,
  fetchTagsByProjectId,
} from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';
const { Option } = Select;

import { getTags, getTagsByProjectId } from '../../../reducers/index';

const Tags = ({ tags, dispatch, required, projectId, tagsInProject }) => {
  useEffect(() => {
    dispatch(fetchTagsByProjectId(projectId));
    if (!tags.length) {
      dispatch(fetchTags(projectId));
    }
  }, [projectId]);

  const defaultChildren = [];
  if (tagsInProject.length && tagsInProject[0].tag) {
    for (let i = 0; i < tagsInProject.length; i++) {
      defaultChildren.push(tagsInProject[i].tag.name);
    }
  }

  const SelectorKind = () => {
    return defaultChildren ? (
      <Select mode="multiple" defaultValue={defaultChildren}>
        {children}
      </Select>
    ) : (
      <Select mode="multiple" defaultValue="Tags">
        {children}
      </Select>
    );
  };

  const children = [];
  for (let i = 0; i < tags.length; i++) {
    children.push(
      <Option key={tags[i].id} value={tags[i].id}>
        {tags[i].name}
      </Option>
    );
  }

  return (
    <Form.Item
      name="tags"
      label="Tags"
      hasFeedback
      rules={[
        {
          required: required,
          type: 'array',
        },
      ]}
    >
      <SelectorKind />
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  tags: getTags(state),
  tagsInProject: getTagsByProjectId(state),
});

export default connect(mapStateToProps)(Tags);
