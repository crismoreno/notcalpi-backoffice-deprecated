import React from 'react';
import { Form, Input } from 'antd';
const InputText = ({ inputType, required }) => {
  return (
    <Form.Item
      name={inputType.toLowerCase()}
      label={inputType}
      rules={[
        {
          required: { required },
          message: `${inputType}`,
        },
      ]}
    >
      <Input placeholder={`${inputType}`} />
    </Form.Item>
  );
};

export default InputText;
