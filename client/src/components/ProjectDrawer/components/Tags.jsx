import React from 'react';
import { connect } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { fetchTags } from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';

import { getTags } from '../../../reducers/index';

const Tags = ({ tags, dispatch }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(tags) || !Boolean(tags.length)) {
      dispatch(fetchTags());
    }
  }, [tags]);
  return (
    <Form.Item
      name="tags"
      label="Tags"
      hasFeedback
      rules={[
        {
          required: false,
          type: 'array',
        },
      ]}
    >
      <Select mode="multiple" placeholder="Tags">
        {tags.map((tag, index) => (
          <Select.Option key={index} value={tag.id}>
            {tag.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  tags: getTags(state),
});

export default connect(mapStateToProps)(Tags);
