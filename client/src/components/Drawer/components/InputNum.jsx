import React from 'react';
import { Form, InputNumber } from 'antd';
const InputNum = ({ inputLabel, inputName, required, inputPlaceholder }) => {
  return (
    <Form.Item
      // name={typeof inputName === 'string' ? inputName.toLowerCase() : inputName}
      label={inputLabel}
      hasFeedback
      rules={[
        {
          required: required,
          message: `Add a valid ${inputName}`,
        },
      ]}
    >
      <InputNumber defaultValue={inputPlaceholder} style={{ width: '100%' }} />
    </Form.Item>
  );
};

export default InputNum;
