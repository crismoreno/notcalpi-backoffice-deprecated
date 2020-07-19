import React from 'react';
import { Form, Input } from 'antd';

const InputUrl = ({ inputName, required }) => {
  return (
    <Form.Item
      name={inputName.toLowerCase()}
      label={inputName}
      hasFeedback
      rules={[{ required: { required }, message: `${inputName}` }]}
    >
      <Input
        style={{ width: '100%' }}
        addonBefore="https://"
        // addonAfter=".com"
        placeholder={`${inputName}`}
      />
    </Form.Item>
  );
};
export default InputUrl;
