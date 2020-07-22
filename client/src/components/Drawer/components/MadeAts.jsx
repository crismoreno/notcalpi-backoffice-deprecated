import React, { useState } from 'react';
import { connect } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { fetchMadeAts } from '../../../helpers/GET/getCategories';
import { fetchMadeAtsByProjectId } from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';

import { getMadeAts, getMadeAtsByProjectId } from '../../../reducers/index';

const MadeAts = ({
  required,
  madeats,
  dispatch,
  projectId,
  madeAtsInProject,
}) => {
  const [madeAtsByProject, setMadeAtsByProject] = useState([]);
  useDeepCompareEffect(() => {
    if (!Array.isArray(madeats) || !Boolean(madeats.length)) {
      dispatch(fetchMadeAts(projectId));
    }
  }, [madeats]);

  useDeepCompareEffect(() => {
    if (!Array.isArray(madeAtsInProject) || !Boolean(madeAtsInProject.length)) {
      dispatch(fetchMadeAtsByProjectId(projectId));
    }
  }, [madeAtsInProject]);

  if (madeAtsInProject && madeAtsInProject[0]) {
    console.log(madeAtsInProject[0].madeat.id);
  }

  return (
    <Form.Item
      name="madeat"
      label="Made At"
      hasFeedback
      rules={[
        {
          required: required,
          message: 'Please select a MadeAt!',
        },
      ]}
    >
      <Select placeholder="Made At">
        {madeats.map((madeat, index) => (
          <Select.Option key={index} value={madeat.id}>
            {madeat.short_name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};
const mapStateToProps = (state) => ({
  madeats: getMadeAts(state),
  madeAtsInProject: getMadeAtsByProjectId(state),
});

export default connect(mapStateToProps)(MadeAts);
