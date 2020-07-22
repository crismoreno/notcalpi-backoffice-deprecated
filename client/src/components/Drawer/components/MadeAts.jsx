import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { fetchMadeAts } from '../../../helpers/GET/getCategories';
import { fetchMadeAtsByProjectId } from '../../../helpers/GET/getCategories';

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

  const EditSelect = () =>
    madeAtsInProject && madeAtsInProject[0] ? (
      <Select defaultValue={madeAtsInProject[0].madeat.short_name}>
        {children}
      </Select>
    ) : (
      <Select defaultValue="Made At">{children}</Select>
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
      <EditSelect />
      {/* <Select
        defaultValue={
          madeAtsInProject && madeAtsInProject[0]
            ? madeAtsInProject[0].madeat.short_name
            : 'Made At'
        }
      >
        {children}
      </Select> */}
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  madeats: getMadeAts(state),
  madeAtsInProject: getMadeAtsByProjectId(state),
});

export default connect(mapStateToProps)(MadeAts);
