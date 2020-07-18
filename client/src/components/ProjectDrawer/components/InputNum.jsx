import React from 'react';
import { Form, InputNumber } from 'antd';
const InputNum = ({ inputName, required }) => {
  return (
    <Form.Item
      name={inputName.toLowerCase()}
      label={inputName}
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
