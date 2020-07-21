import React from 'react';
import { connect } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { fetchCodingLangs } from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';

import { getCodingLangs } from '../../../reducers/index';

const CodingLangs = ({ codingLangs, dispatch, required }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(codingLangs) || !Boolean(codingLangs.length)) {
      dispatch(fetchCodingLangs());
    }
  }, [codingLangs]);
  return (
    <Form.Item
      name="codingLangs"
      label="CodingLangs"
      hasFeedback
      rules={[
        {
          required: required,
          type: 'array',
        },
      ]}
    >
      <Select mode="multiple" placeholder="Coding Langs">
        {codingLangs.map((codingLang, index) => (
          <Select.Option key={index} value={codingLang.id}>
            {codingLang.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  codingLangs: getCodingLangs(state),
});

export default connect(mapStateToProps)(CodingLangs);
