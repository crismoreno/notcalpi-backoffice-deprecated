import React from 'react';
import { Form, Input } from 'antd';

const InputUrl = ({ inputType, required }) => {
  return (
    <Form.Item
      name={inputType.toLowerCase()}
      label={inputType}
      rules={[{ required: { required }, message: `Please enter ${inputType}` }]}
    >
      <Input
        style={{ width: '100%' }}
        addonBefore="https://"
        // addonAfter=".com"
        placeholder={`Please enter ${inputType}`}
      />
    </Form.Item>
  );
};
export default InputUrl;
