import React from 'react';
import { Form, InputNumber } from 'antd';
const InputNum = ({ inputLabel, inputName, required }) => {
  return (
    <Form.Item
      name={typeof inputName === 'string' ? inputName.toLowerCase() : inputName}
      label={inputLabel}
      hasFeedback
      rules={[
        {
          required: { required },
          message: `${inputName}`,
        },
      ]}
    >
      <InputNumber placeholder={`${inputName}`} style={{ width: '100%' }} />
    </Form.Item>
  );
};

export default InputNum;
