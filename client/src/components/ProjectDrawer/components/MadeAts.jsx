import React from 'react';
import { connect } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { fetchMadeAts } from '../../../helpers/GET/getCategories';

import { Form, Select } from 'antd';

import { getMadeAts } from '../../../reducers/index';

const MadeAts = ({ madeats, dispatch }) => {
  useDeepCompareEffect(() => {
    if (!Array.isArray(madeats) || !Boolean(madeats.length)) {
      dispatch(fetchMadeAts());
    }
  }, [madeats]);

  return (
    <Form.Item
      name="madeat"
      label="Made At"
      hasFeedback
      rules={[
        {
          required: true,
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
});

export default connect(mapStateToProps)(MadeAts);
