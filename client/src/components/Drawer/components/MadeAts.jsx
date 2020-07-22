import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchMadeAts,
  fetchMadeAtsByProjectId,
} from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';
const { Option } = Select;

import { getMadeAts, getMadeAtsByProjectId } from '../../../reducers/index';

const MadeAts = ({
  required,
  madeats,
  dispatch,
  projectId,
  madeAtsInProject,
}) => {
  useEffect(() => {
    dispatch(fetchMadeAtsByProjectId(projectId));
    if (!madeats.length) {
      dispatch(fetchMadeAts(projectId));
    }
  }, [projectId]);

  const SelectorKind = () =>
    madeAtsInProject && madeAtsInProject[0] ? (
      <Select placeholder={madeAtsInProject[0].madeat.short_name}>
        {children}
      </Select>
    ) : (
      <Select placeholder="Made At">{children}</Select>
    );

  const children = [];
  for (let i = 0; i < madeats.length; i++) {
    children.push(
      <Option key={madeats[i].id} value={madeats[i].id}>
        {madeats[i].short_name}
      </Option>
    );
  }

  return (
    <Form.Item
      label="Made At"
      hasFeedback
      rules={[
        {
          required: required,
          message: 'Please select a MadeAt!',
        },
      ]}
    >
      <SelectorKind />
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  madeats: getMadeAts(state),
  madeAtsInProject: getMadeAtsByProjectId(state),
});

export default connect(mapStateToProps)(MadeAts);
