import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchCodingLangs,
  fetchCodingLangsByProjectId,
} from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';
const { Option } = Select;

import {
  getCodingLangs,
  getCodingLangsByProjectId,
} from '../../../reducers/index';

const CodingLangs = ({
  codingLangs,
  dispatch,
  required,
  codingLangsInProject,
  projectId,
}) => {
  useEffect(() => {
    dispatch(fetchCodingLangsByProjectId(projectId));
    if (!codingLangs.length) {
      dispatch(fetchCodingLangs(projectId));
    }
  }, [projectId]);

  const defaultChildren = [];
  if (codingLangsInProject.length && codingLangsInProject[0].codinglang) {
    for (let i = 0; i < codingLangsInProject.length; i++) {
      defaultChildren.push(codingLangsInProject[i].codinglang.name);
    }
  }

  const SelectorKind = () => {
    return defaultChildren ? (
      <Select mode="multiple" defaultValue={defaultChildren}>
        {children}
      </Select>
    ) : (
      <Select mode="multiple" defaultValue="Coding Languages">
        {children}
      </Select>
    );
  };

  const children = [];
  for (let i = 0; i < codingLangs.length; i++) {
    children.push(
      <Option key={codingLangs[i].id} value={codingLangs[i].id}>
        {codingLangs[i].name}
      </Option>
    );
  }

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
      <SelectorKind />
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  codingLangs: getCodingLangs(state),
  codingLangsInProject: getCodingLangsByProjectId(state),
});

export default connect(mapStateToProps)(CodingLangs);
